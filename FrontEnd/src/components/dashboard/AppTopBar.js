import React from 'react';
import Typography from "@mui/material/Typography";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import { Button } from '@mui/material';
import flag from "../../assets/united-states.png";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Select, { selectClasses } from '@mui/joy/Select';
import StableOption from '@mui/joy/Option/Option';
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 220;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

function AppTopBar({ drawerOpen, setDrawerOpen, currentView }) {
    console.log("currentView", currentView)
    const handleClick = () => {
        setDrawerOpen(true)
    }
    return (
        <AppBar position="fixed" open={drawerOpen} style={{ color: "black", backgroundColor: 'white' }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MenuOpenIcon onClick={handleClick} sx={{ ...(drawerOpen && { display: "none" }) }} />
                    <Typography style={{ marginLeft: "5px", fontSize: "17px", color: "black" }} variant="h6" noWrap>
                        {currentView}
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Select
                        placeholder="Beautiful Minds Salon"
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            width: 240,
                            backgroundColor: "#f7f7f9",
                            color: "black",
                            // border: "1px solid grey",
                            borderRadius: "18px",
                            marginRight: '8px', // Space between select and button
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <StableOption value="dog">Spa</StableOption>
                        <StableOption value="cat">Fitness</StableOption>
                    </Select>
                    <Button
                        sx={{
                            backgroundColor: "#f7f7f9",
                            color: "black",
                            // border: "1px solid grey",
                            borderRadius: "18px",
                            marginRight: '8px', // Space between button and notification icon
                        }}
                        variant="outlined"
                    >
                        <img
                            src={flag} // Replace with your image path
                            alt="icon"
                            style={{ width: 20, height: 20, marginRight: 8 }} // Adjust size and margin as needed
                        />
                        EN
                    </Button>
                    <CircleNotificationsOutlinedIcon />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default AppTopBar;
