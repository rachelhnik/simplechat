export default interface User {
    id: string;
    name: string;
    room: string;
}

const users: User[] = [];

export const addUser = ({ id, name, room }: User) => {
    const userName = name.trim().toLowerCase();
    const roomEnter = room.trim().toLowerCase();

    if (!name || !room) return { error: "Both name and room are required" };
    const existingUser = users.find(
        (user) => user.name === userName && user.room === roomEnter
    );
    if (existingUser) return { error: "username is taken" };
    const newUser = { id: id, name: userName, room: roomEnter };
    users.push(newUser);

    return { newUser };
};

export const removeUser = (id: string) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) return users.splice(index, 1)[0];
};

export const findUser = (id: string) => users.find((user) => user.id === id);

export const getUsersInRoom = (room: string) =>
    users.find((user) => user.room === room);
