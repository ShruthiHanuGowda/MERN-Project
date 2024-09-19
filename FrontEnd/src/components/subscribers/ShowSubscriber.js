import React, { useContext } from 'react'
import EditSubscriber from './EditSubscriber';
import DeleteSubscriber from './DeleteSubscriber';
import { Context } from "../../App"

export default function ShowSubscriber() {
    const { setSubscriberID, setShowText, setName, setSubscribedChannel, isRefresh, subscriber, setsubscriber, setToggleForm, toggleForm, setRefresh } = useContext(Context)
    const subscribers = subscriber && subscriber.map && subscriber.map((item, i) =>
    (
        <div style={{ display: "flex", marginTop: "20px" }} key={i}>
            <span style={{ fontSize: "25px", marginLeft: "20px", marginRight: "20px" }}>{item.name} {item.subscribedToChannel}</span>
            <EditSubscriber setSubscriberID={setSubscriberID} setShowText={setShowText} name={item.name} setName={setName} subscribedChannel={item.subscribedToChannel} setSubscribedChannel={setSubscribedChannel} setToggleForm={setToggleForm} toggleForm={toggleForm} SubscriberId={item._id} />
            <DeleteSubscriber isRefresh={isRefresh} setRefresh={setRefresh} subscriber={subscriber} setsubscriber={setsubscriber} SubscriberId={item._id} /></div>))

    return subscribers;

}

