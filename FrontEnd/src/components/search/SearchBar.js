import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import "./../../styles/login.scss"
import { Context } from '../../App'

function SearchBar() {
    const { search, setSearch } = useContext(Context);

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value.toLowerCase());
    }
    return (
        <div className='searchBar'>
            <TextField
                id="input1"
                label="Search User Name"
                value={search}
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar