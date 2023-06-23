import { Box, Button, TextField, Typography } from "@mui/material";
import "./Join.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid grey",
                borderRadius: 4,
                padding: 4,
            }}
        >
            <Typography variant="h4" sx={{ mb: 2 }}>
                SimpleChat
            </Typography>
            <TextField
                id="outlined-basic"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                sx={{ mb: 2 }}
            />
            <TextField
                id="outlined-basic"
                label="Room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                variant="outlined"
                sx={{ mb: 2 }}
            />
            <Link to={`/chat?name=${name}&room=${room}`}>
                <Button variant="contained" type="submit">
                    Enter
                </Button>
            </Link>
        </Box>
    );
};

export default Join;
