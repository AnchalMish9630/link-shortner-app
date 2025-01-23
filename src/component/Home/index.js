import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import {Button, } from "@mui/material";

const Home = ()=>{
    return (
        <div>
            <AppBar>
                <Toolbar>
                <Typography variant="h6">
                Shortly
                </Typography>
                <Box>
                    <Button>Links</Button>
                    <Button>Logout</Button>
                </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Home;