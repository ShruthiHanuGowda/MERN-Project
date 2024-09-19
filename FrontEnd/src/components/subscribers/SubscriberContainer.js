import React, { useContext, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { ApiUrl } from "../../constants/ApiURL"
import ShowSubscriberList from './ShowSubscriber';
import SubscriberForm from "./SubscriberForm"
import { Context } from "../../App"
import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar';
import PaginationSetUp from '../PaginationSetUp';

export default function SurbscriberContainer() {
    const { setsubscriber, setSubscribedChannel, isRefresh, setRefresh, setToggleForm, toggleForm, toggle,
        setToggle, setName } = useContext(Context)

    useEffect(() => {
        if (isRefresh) {
            fetch(`${ApiUrl}/subscribers`).then((response) => { return response.json() }).then((data) => (setRefresh(false), setsubscriber(data)))
        }
    }, [isRefresh, setRefresh])

    const handleSubscriber = () => {
        setToggle(!toggle)
    }

    const handleForm = () => {
        setToggleForm(!toggleForm)
        setName("")
        setSubscribedChannel("")
    }
    return (
        <>
            <div><h1>Subscriber</h1>
                <Stack spacing={2} direction="row">
                    <Link to="/subscriber">  <Button style={{ textTransform: "none" }} variant="contained" onClick={handleSubscriber}>Display All Subscriber</Button></Link>
                    <Button style={{ textTransform: "none" }} variant="contained" onClick={handleForm}>Create Subscriber</Button>
                    <Link to="/calculation"><Button style={{ textTransform: "none" }} variant="contained" onClick={handleForm}>Calculations</Button></Link>
                    <Link to="/search"><Button style={{ textTransform: "none" }} variant="contained" onClick={handleForm}>Search User</Button></Link>
                </Stack>
                <div>
                    {
                        toggle && (<><SearchBar /> <ShowSubscriberList /> <PaginationSetUp /></>)
                    }
                </div>
                <div>{
                    toggleForm && <SubscriberForm />
                }
                </div>
            </div>
        </>
    )
}
