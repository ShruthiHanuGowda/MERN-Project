import React from 'react'
import SurbscriberContainer from "./subscribers/SubscriberContainer"
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