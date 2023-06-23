import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { appRouter } from "./src/router";
import { addUser, findUser, getUsersInRoom, removeUser } from "./src/users";
import User from "./src/users";
import { Socket } from "dgram";

const PORT = process.env.port || 5000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: true,
        credentials: true,
    },
    allowEIO3: true,
});
app.use(cors());
app.use(appRouter);

io.on("connection", (socket) => {
    socket.on("join", ({ name, room }, callback: () => {}) => {
        const id = socket.id;

        const { error, newUser } = addUser({ id, name, room });

        socket.emit("message", {
            user: "admin",
            text: `Welcome to the romm ${room}, ${name}`,
        });
        if (!newUser) return;
        socket.broadcast.to(newUser?.room).emit("message", {
            user: "admin",
            text: `New user ${name} has joined`,
        });

        socket.join(newUser?.room);
        io.to(newUser.room).emit("roomData", {
            room: newUser.room,
            users: getUsersInRoom(newUser.room),
        });
        callback();
    });

    socket.on("sendMessage", (message, callback: () => {}) => {
        const user = findUser(socket.id);

        if (!user) return;
        io.to(user.room).emit("message", {
            user: user.name,
            text: message,
        });
        callback();
    });
    socket.on("disconnect", () => {
        const user = removeUser(socket.id);
        if (user) {
            io.to(user.room).emit("message", {
                user: "admin",
                text: `${user.name} has left.`,
            });
            io.to(user.room).emit("roomData", {
                room: user.room,
                users: getUsersInRoom(user.room),
            });
        }
    });
    return () => {
        socket.emit("disconnect");
        socket.off;
    };
});

server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT} `);
});
