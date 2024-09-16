import { Box, Button, TextField } from '@mui/material'
import React, { useContext, useRef } from 'react'
import { ApiUrl } from "../../constants/ApiURL"
import { Context } from "../../App"

export default function SubscriberForm() {
    const focusInput1 = useRef(null)
    const focusInput2 = useRef(null)
    const { subscriberID, name, setName, showText, subscribedChannel, setSubscribedChannel, setsubscriber, subscriber } = useContext(Context)

    const handleSubmit = (event) => {
        event.preventDefault()
        focusInput1.current.focus()
        focusInput2.current.focus()

        if (name && subscribedChannel !== null) {
            fetchAPI(showText)
        }
    }

    const fetchAPI = (showText) => {
        if (showText != true) {
            const options = {
                method: "post",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "name": name, "subscribedToChannel": subscribedChannel })
            }
            fetch(`${ApiUrl}/subscribers`, options).then((response) => {
                // console.log("response", response)
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            }).then((data) => setsubscriber([...subscriber, data]))
        } else if (showText == true) {
            const option = {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "name": name })
            }
            const value = `${ApiUrl}/subscribers/${subscriberID}`
            console.log("json", value)
            fetch(value, option).then((response) => response.json()).then((data) => setName(data)).catch((error) => console.log(error))
        }
    }
    return (
        <>
            <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div style={{ marginTop: "30px" }}>
                    <TextField
                        required
                        // id="outlined-required"
                        id="input"
                        label="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        inputRef={focusInput1}
                    // defaultValue="Subscribed to channel"
                    />

                    <TextField
                        required
                        // id="outlined-required"
                        id="input"
                        label="Subscribed to channel"
                        value={subscribedChannel}
                        onChange={e => setSubscribedChannel(e.target.value)}
                        inputRef={focusInput2}
                    // defaultValue="Subscribed to channel"
                    />
                    <div style={{ marginTop: "30px", marginLeft: "10px" }}>
                        <Button type="submit" variant="outlined">Submit</Button>
                    </div>
                </div>
            </Box >
        </>
    )
}
