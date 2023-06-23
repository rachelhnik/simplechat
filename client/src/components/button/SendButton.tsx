import { Box, TextField, Button } from "@mui/material";
import { ChangeEvent, FormEvent } from "react";
interface Props {
    message: string;
    setMessage: (e: any) => void;
    sendMessage: (e: FormEvent<HTMLButtonElement>) => void;
}

const SendButton = ({ message, setMessage, sendMessage }: Props) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant="outlined"
                sx={{ width: "85%" }}
            />
            <Button
                sx={{ width: "15%" }}
                variant="contained"
                onClick={(e) => {
                    sendMessage(e);
                }}
            >
                Send
            </Button>
        </Box>
    );
};

export default SendButton;
