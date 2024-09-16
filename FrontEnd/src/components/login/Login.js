import { Button, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { ApiUrl } from "../../constants/ApiURL"
import { Context } from "../../App"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const { user, setUser, password, setPassword, setLogin, login } = useContext(Context)
    const handleSubmit = (event) => {
        event.preventDefault()
        if (user && password !== null) {
            fetchAPI()
        }
        if (login == "success") {
            navigate("/subscriber");
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [login])

    const fetchAPI = () => {
        const options = {
            method: "post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": user, "password": password })
        }
        fetch(`${ApiUrl}/login/users`, options).then((response) => response.json()
        ).then((data) => {
            console.log("data", data)
            setLogin(data)
        }
        )
    }

    const handleUser = (e) => {
        setUser(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={user} onChange={handleUser} />
            <TextField value={password} onChange={handlePassword} />
            <Button variant="raised" label="Submit" type="submit">Login</Button>
            <h1>{login === "success" ? "login successfull" : login}</h1>
        </form>
    )
}

export default Login