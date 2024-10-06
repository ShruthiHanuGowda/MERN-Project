import { Pagination, Stack } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { ApiUrl } from "../constants/ApiURL"
import { Context } from '../App';

function PaginationSetUp() {
    const { page, setPage, totalPages, setTotalPages, setsubscriber } = useContext(Context)
    const itemsPerPage = 5;
    useEffect(() => {
        fetch(`${ApiUrl}/users?page=${page}&limit=${itemsPerPage}`)
            .then((response) => response.json())
            .then((data) => (setsubscriber(data.results), setTotalPages(data.totalPages)))
    }, [page])

    const handleChange = (event, value) => {
        setPage(value);
    }
    return (
        <div className="pageContainer">
            <Stack spacing={2}>
                <Pagination count={totalPages} onChange={handleChange} page={page} color="primary" />
            </Stack>
        </div>
    )
}

export default PaginationSetUp