import { Box } from "@mui/material";
import Message from "./Message";
import { MessageType } from "../chat/Chat";

interface Props {
    messages: MessageType[];
    name: string;
}

const Messages = ({ messages, name }: Props) => {
    console.log("a", messages);
    return (
        <Box sx={{ height: "70%" }}>
            {messages.map((msg: MessageType, i) => (
                <Message key={i} message={msg} name={name} />
            ))}
        </Box>
    );
};
export default Messages;
