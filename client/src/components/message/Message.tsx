import { Box, Typography } from "@mui/material";
import { MessageType } from "../chat/Chat";

interface Props {
    message: MessageType;
    name: string;
}

const Message = ({ message: { user, text }, name }: Props) => {
    let isSentByUser = false;
    const trimmedName = name.trim().toLocaleLowerCase();
    if (trimmedName === user) isSentByUser = true;

    return (
        <Box>
            {isSentByUser ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mb: 2,
                    }}
                >
                    <Typography>{user}</Typography>
                    <Box
                        sx={{
                            bgcolor: "#1976D2",
                            alignSelf: "flex-end",
                            width: "max-content",
                            mr: 3,
                            ml: 1,
                            px: 2,
                            borderRadius: 2,
                        }}
                    >
                        <Typography sx={{ color: "white" }}>{text}</Typography>
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        mt: 1,
                        mb: 2,
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "grey",
                            alignSelf: "flex-start",
                            width: "max-content",
                            mr: 1,
                            ml: 1,
                            px: 2,
                            borderRadius: 2,
                        }}
                    >
                        <Typography sx={{ color: "white" }}>{text}</Typography>
                    </Box>
                    <Typography>{user}</Typography>
                </Box>
            )}
        </Box>
    );
};
export default Message;
