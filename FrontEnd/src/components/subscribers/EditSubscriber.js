import React from 'react'
import EditIcon from '@mui/icons-material/Edit';

function EditSubscriber({ setSubscriberID, setShowText, name, setName, setSubscribedChannel, subscribedChannel, setToggleForm, toggleForm, SubscriberId }) {
    const handleEdit = () => {
        console.log("name", name)
        setToggleForm(!toggleForm)
        setName(name)
        setSubscribedChannel(subscribedChannel)
        setShowText(true)
        setSubscriberID(SubscriberId)
    }
    return (
        <div><EditIcon onClick={handleEdit} /></div>
    )
}

export default EditSubscriber