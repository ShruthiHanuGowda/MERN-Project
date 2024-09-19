import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import "./../../styles/login.scss"
import { Context } from '../../App'

function SearchBar() {
    const { subscriber, setsubscriber } = useContext(Context)
    const handleSearch = (e) => {
        e.preventDefault()
        const text = e.target.value;

        const filteredUser = subscriber.filter((user) => {
            if (user.name.includes(text)) {
                return user.name
            }
        })
        setsubscriber(filteredUser)
    }
    return (
        <div className='searchBar'><TextField
            id="input1"
            label="Search User Name"
            // value={name}
            onChange={(e) => handleSearch(e)}
        />
        </div>
    )
}

export default SearchBar