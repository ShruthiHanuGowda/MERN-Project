import React, { useContext } from 'react'
import EditSubscriber from './EditSubscriber';
import DeleteSubscriber from './DeleteSubscriber';
import { Context } from "../../App"

export default function ShowSubscriber() {
    const { subscriber, filteredUser } = useContext(Context)


    return filteredUser ? filteredUser.map((item, i) => (
        <div style={{ display: "flex", marginTop: "20px" }} key={i}>
            <span style={{ fontSize: "25px", marginLeft: "20px", marginRight: "20px" }}>{item.name} {item.subscribedToChannel}</span>
            <EditSubscriber />
            <DeleteSubscriber /></div>)) : subscriber.map((item, i) => (
                <div style={{ display: "flex", marginTop: "20px" }} key={i}>
                    <span style={{ fontSize: "25px", marginLeft: "20px", marginRight: "20px" }}>{item.name} {item.subscribedToChannel}</span>
                    <EditSubscriber />
                    <DeleteSubscriber /></div>))
}

