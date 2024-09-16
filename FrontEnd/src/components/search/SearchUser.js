import { TextField } from '@mui/material'
import React, { useState } from 'react'

const userList = ["h", "shruthi", "hanumanthe gowda", "pushpa", "kiran", "nayana"]

function SearchUser() {
    const [user, setUser] = useState(userList)

    const handleSearch = (e) => {
        const text = e.target.value;
        const filteredUser = userList.filter((user) => (user.includes(text)))
        console.log("filteredUser", filteredUser)
        setUser(filteredUser)
    }
    return (
        <div><TextField
            required
            // id="outlined-required"
            id="input1"
            label="Enter Name"
            // value={name}
            onChange={(e) => handleSearch(e)}
        // inputRef={focusInput1}
        // defaultValue={name}      
        />
            {user.map((item) => (
                <h1>{item}</h1>
            ))}
        </div>
    )
}

export default SearchUser