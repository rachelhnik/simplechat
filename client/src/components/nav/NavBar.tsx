import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

interface Props {
    name: string;
    room: string;
}
export default function NavBar({ name, room }: Props) {
    console.log(room);
    return (
        <Box>
            <AppBar position="static">
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <FiberManualRecordIcon
                            fontSize="small"
                            color="success"
                        />

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            {name}
                        </Typography>
                    </Box>
                    <Typography variant="h6">{room}</Typography>
                    <Link to={"/"}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: -2 }}
                        >
                            <CloseIcon sx={{ color: "white" }} />
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
