import React, { useContext } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Context } from '../../App';

function EditSubscriber() {
    const { setSubscriberID, setShowText, name, setName, setSubscribedChannel, subscribedChannel, setToggleForm, toggleForm, SubscriberId } = useContext(Context)
    const handleEdit = () => {
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