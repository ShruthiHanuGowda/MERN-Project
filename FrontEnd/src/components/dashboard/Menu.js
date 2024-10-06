import React from 'react'
import Drawer from "@mui/material/Drawer";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Groups3Icon from '@mui/icons-material/Groups3';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SettingsIcon from '@mui/icons-material/Settings';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// const drawerWidth = "500px";
const drawerWidth = 220;
const drawerStyles = {
    "&, & .MuiDrawer-paper": {
        width: drawerWidth,
    },
};

function Menu({ drawerOpen, setCurrentView, setDrawerOpen }) {
    const handleMenuClick = (view) => {
        setCurrentView(view);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={() => drawerOpen && handleDrawerClose()}
        >
            <Drawer
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                sx={drawerStyles}
                onClose={(_, reason) =>
                    reason === 'backdropClick' && console.log('close')
                }
            >
                <div style={{ display: 'flex', width: "225px", marginTop: 0, backgroundColor: '#5546A0', flexDirection: 'column', height: '100%' }}>
                    <div style={{
                        color: "white", display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginTop: "20px"
                    }}>
                        <ChevronLeftIcon onClick={handleDrawerClose} />
                    </div>
                    <List style={{ flexGrow: 1, color: 'white' }}>
                        <ListItem button onClick={() => handleMenuClick('Dashboard')}>
                            <DashboardIcon style={{
                                marginRight: 8, height: 20,
                                width: 35
                            }} />
                            <ListItemText primary="Dashboard" />
                        </ListItem>

                        <ListItem button onClick={() => handleMenuClick('Appointments')}>
                            <CalendarMonthIcon style={{
                                marginRight: 8, height: 20,
                                width: 35
                            }} />
                            <ListItemText primary="Appointment" />
                        </ListItem>

                        <ListItem button onClick={() => handleMenuClick('Customer')}>
                            <Groups3Icon style={{
                                marginRight: 8, height: 20,
                                width: 35
                            }} />
                            <ListItemText primary="Customer" />
                        </ListItem>
                        <ListItem button onClick={() => handleMenuClick('Customer')}>
                            <AccessTimeFilledIcon style={{
                                marginRight: 8, height: 20,
                                width: 35
                            }} />
                            <ListItemText primary="Marketting" />
                        </ListItem>
                        <ListItem button onClick={() => handleMenuClick('Customer')}>
                            <MedicalServicesIcon style={{
                                marginRight: 8, height: 20,
                                width: 35
                            }} />
                            <ListItemText primary="Services" />
                        </ListItem>
                        <ListItem button onClick={() => handleMenuClick('Customer')}>
                            <PersonIcon style={{
                                marginRight: 8, height: 20,
                                width: 35
                            }} />
                            <ListItemText primary="Employees" />
                        </ListItem>
                        <ListItem button onClick={() => handleMenuClick('Customer')}>
                            <AssessmentIcon style={{
                                marginRight: 8, height: 20,
                                width: 35
                            }} />
                            <ListItemText primary="Reports" />
                        </ListItem>
                        <ListItem button onClick={() => handleMenuClick('Customer')}>
                            <SettingsIcon style={{
                                marginRight: 8, height: 20,
                                width: 35
                            }} />
                            <ListItemText style={{
                                fontSize: "16px"
                            }} primary="Settings" />
                        </ListItem>
                    </List>
                    <div style={{ marginTop: 'auto', color: 'white' }}>
                        <ListItem button onClick={() => console.log('Logout clicked')}>
                            <LogoutIcon style={{ marginRight: 8 }} />
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </div>
                </div>
            </Drawer>
        </ClickAwayListener>
    )
}

export default Menu