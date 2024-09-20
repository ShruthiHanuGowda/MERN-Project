import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import "./../../styles/login.scss"
import { Context } from '../../App'

function SearchBar() {
    const { subscriber, filteredUser, setFilteredUser, inputValue, setInputValue } = useContext(Context)

    console.log("values", subscriber, filteredUser)

    const handleSearch = (e) => {
        e.preventDefault()
        const text = e.target.value
        setInputValue(text)

        const filterUser = subscriber.filter((user) => {
            if (user.name.includes(text)) {
                return user.name
            }
        })
        setFilteredUser(filterUser)
    }
    return (
        <div className='searchBar'><TextField
            id="input1"
            label="Search User Name"
            value={inputValue}
            onChange={handleSearch}
        />
        </div>
    )
}
export default SearchBar