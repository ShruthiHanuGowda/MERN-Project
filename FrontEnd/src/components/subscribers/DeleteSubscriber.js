import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { ApiUrl } from "../../constants/ApiURL"
import { Context } from '../../App';

function DeleteSubscriber() {
    const { setRefresh, SubscriberId } = useContext(Context)
    const handleDelete = () => {
        const options = {
            method: "delete",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({ "name": name, "subscribedToChannel": subscribedChannel })
        }
        //filter method is used to not delete form database
        // setsubscriber(subscriber.filter((item) => (item._id !== SubscriberId)))
        //to delete from database permanently
        fetch(`${ApiUrl}/subscribers/${SubscriberId}`, options).then((response) => response.json()).then((result) => {
            setRefresh(true)
            console.log("result", result)
        })
    }
    return (
        <div><DeleteIcon onClick={handleDelete} /></div>
    )
}

export default DeleteSubscriber