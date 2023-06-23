import { Box } from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import queryString from "query-string";
import { FormEvent, useEffect, useState } from "react";

import io, { Socket } from "socket.io-client";
import NavBar from "../nav/NavBar";
import SendButton from "../button/SendButton";
import Messages from "../message/Messages";

export interface MessageType {
    user: string;
    text: string;
}
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;
const Chat = () => {
    const [name, setName] = useState<string>("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<MessageType[]>([]);

    const ENDPOINT = "localhost:5000";

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setName(name as string);
        setRoom(room as string);

        socket.emit("join", { name, room }, (error: unknown) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT]);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (message) {
            socket.emit("sendMessage", message, () => {
                setMessage("");
            });
        }
    };
    console.log(messages);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100vh",
                width: "50vw",
            }}
        >
            <NavBar name={name} room={room} />
            <Messages name={name} messages={messages} />
            <SendButton
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
            />
        </Box>
    );
};

export default Chat;
