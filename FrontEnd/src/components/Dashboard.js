import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SurbscriberContainer from "./subscribers/SubscriberContainer"
import Calculations from "./calculations/Calculations"
import SearchUser from "./search/SearchUser"
import Logout from "./logout/Logout";

function Dashboard() {
    return (
        <div>
            <SurbscriberContainer />
            <div style={{ float: "right" }}>
                <Logout />
            </div>
        </div>
    )
}

export default Dashboard