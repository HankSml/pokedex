import React from 'react';
import {
    Stack,
    Typography,
    Link,
    Box,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import TypeBadge from '../ui/TypeBadge/TypeBadge';
import DamageClassBadge from '../ui/DamageClassBadge/DamageClassBadge';
import capitalize from '../../utils/capitalize';
import './Move.css';

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

    if (status == "error") return "Error fetching data"
    if (status == "loading") return "Loading..."

    return (
        <Stack direction="row" spacing={2} sx={{maxWidth: "800px"}}>
            <Typography component="h5" variant="h6" align="center">
                { capitalize(data.name) }
            </Typography>
            <TypeBadge type={data.type.name}/> 
            <DamageClassBadge damageClass={data.damage_class.name}/>
            <Stack>
                <span className="tinyHeader">Power</span>
                <span className="tinyText">{ data.power || "-"}</span>
            </Stack>
            <Stack>
                <span className="tinyHeader">Accuracy</span>
                <span className="tinyText">{ data.accuracy || "-"}</span>
            </Stack>
        </Stack>
    )
}