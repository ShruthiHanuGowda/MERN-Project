import { Pagination, Stack } from '@mui/material'
import React, { useState } from 'react'

function PaginationSetUp() {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5)
    const handleChange = (event, value) => {
        setPage(value);
    }
    return (
        <div>
            {/* <h1>{page}</h1> */}
            <Stack spacing={2}>
                <Pagination count={10} onChange={handleChange} page={page} color="primary" />
            </Stack>
        </div>
    )
}

export default PaginationSetUp