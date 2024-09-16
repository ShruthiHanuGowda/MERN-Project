import { Button, Grid2, Stack, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { ApiUrl } from "../../constants/ApiURL"
import { Context } from "../../App"
import { useNavigate } from "react-router-dom";
import "./../../styles/login.scss"

function Login() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
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

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className="loginContainer">
            <div>
                <Stack spacing={2} direction="row">
                    <Button style={{ textTransform: "none" }} variant="contained" label="Submit" type="submit">Register</Button>
                    <Button style={{ textTransform: "none" }} variant="contained" label="Submit" type="submit" onClick={handleClick}>Login</Button>
                </Stack>
            </div>
            {
                show && <div className='loginText'>
                    <form onSubmit={handleSubmit}>
                        <Grid2 container direction={"column"} spacing={2}>
                            <TextField value={user} onChange={handleUser} />
                            <TextField value={password} onChange={handlePassword} />
                        </Grid2>
                        <Button variant="contained" label="Submit" type="submit">Submit</Button>
                    </form>
                    <h1>{login === "success" ? "login successfull" : login}</h1>
                </div>
            }
        </div>
    )
}

export default Login