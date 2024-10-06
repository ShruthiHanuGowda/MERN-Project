import React, { useState } from "react";
import Menu from "./Menu"; // Ensure this path is correct
import AppTopBar from "./AppTopBar"; // Ensure this path is correct
import Demo from "./Demo"
import "../../styles/login.scss"
import { Box } from "@mui/material";

const SchedulerTask = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2018, 5, 27));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [currentView, setCurrentView] = useState('');

    if (currentDate) {
        console.log("date", typeof (currentDate))
    }

    return (
        <>
            <Box className="main-container">
                <div className="main-sub-division">
                    <Menu drawerOpen={drawerOpen} setCurrentView={setCurrentView} setDrawerOpen={setDrawerOpen} />
                </div>
                <div className="main-sub-division">
                    <AppTopBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} currentView={currentView} />
                    {currentView === "Appointments" &&
                        < div >
                            <main style={{ marginTop: 100, marginLeft: drawerOpen ? 0 : -200 }}>
                                <Demo />
                            </main>
                        </div >
                    }
                </div>

                {/* {currentView === "Dashboard" &&
                    <h1>
                        Dashboard
                    </h1>
                } */}
            </Box>
        </>
    );
};

export default SchedulerTask;
