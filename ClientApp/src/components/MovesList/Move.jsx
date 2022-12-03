import React from 'react';
import {
    Container,
    Typography,
    Link,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query';

// query to get move data: name, type, phys/sp, acc, pwr
async function fetchMove(url) {
    try {
        const moveData = await fetch(url);
        const info = await moveData.json();
        return info
    } catch (err) {
        console.log(err)
    }
    
}

export default function Move({ name, url }) {
    const {status, isError, data, error } = useQuery(
        ["move", url], 
        async () => {return await fetchMove(url)});

    return (
        <Container>
            {status === "error" && <p>Error fetching data</p>}
            {status == "loading" && (
                <Typography component="p" variant="body1">
                    Loading...
                </Typography>
            )}
            {status == "success" && (
                <Typography>
                    {data.name} |
                    { data.type.name} | 
                    { data.power? data.power:"-"} | 
                    { data.accuracy? data.accuracy:"-"}
                </Typography>
            )}
        </Container>
    )
}