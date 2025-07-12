import { AppBar, Toolbar, Typography } from "@mui/material";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Header(){
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">E-Commerce</Typography>
            </Toolbar>
            </AppBar>
    )
}