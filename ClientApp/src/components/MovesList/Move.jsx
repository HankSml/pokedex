import React from 'react';
import {
    Box,
    Typography,
    Link,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query';

// query to get move data: name, type, phys/sp, acc, pwr
async function fetchMove(name) {
    try {
        const moveData = await fetch(`https://pokeapi.co/api/v2/move/${name}/`);
        return await moveData.json();
    } catch (err) {
        console.log(err)
    }
    
}

export default function Move({ name, url }) {
    const {isLoading, isError, data, error } = useQuery('move', fetchMove)
}