import React from 'react'
import SurbscriberContainer from "./subscribers/SubscriberContainer"
import Logout from "./logout/Logout";

function Dashboard() {
    return (
        <div style={{ display: "flex", }}>
            <SurbscriberContainer />
            <div style={{ marginLeft: "auto" }}>
                <Logout />
            </div>
        </div>
    )
}

export default Dashboard