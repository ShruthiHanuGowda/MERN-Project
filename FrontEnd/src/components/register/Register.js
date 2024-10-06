import { Button, Grid2, TextField } from '@mui/material'
import React, { useState } from 'react'
import { ApiUrl } from "../../constants/ApiURL"

function Register() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [registerUser, setRegisterUser] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (user && email && password !== null) {
            fetchAPI()
        }
    }

    const fetchAPI = () => {
        const options = {
            method: "post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": user, "email": email, "password": password })
        }
        fetch(`${ApiUrl}/register`, options).then((response) => response.json()
        ).then((data) => { setRegisterUser(data) }
        )
    }


    const handleUser = (e) => {
        setUser(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className='registrationForm'><form onSubmit={handleSubmit}>
            <Grid2 container direction={"column"} spacing={2}>
                <TextField value={user} label="User Name" onChange={handleUser} />
                <TextField value={email} label="Email" onChange={handleEmail} />
                <TextField value={password} label="Password" onChange={handlePassword} />
            </Grid2>
            <div style={{ marginTop: "10px" }}>
                <Button variant="contained" label="Submit" type="submit">Submit</Button>
            </div>
            {/* <h1>{registerUser && `${registerUser.name}, you have registered successfully`}</h1> */}
            <h1>{typeof registerUser === 'object' && registerUser !== null ? `${registerUser.name}, you have registered successfully` : registerUser}</h1>
        </form >
        </div >
    )
}

export default Register