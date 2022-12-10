import React from 'react';
import { Stack } from '@mui/material'
import Move from './Move'
import './MovesList.css'
import pokeData from '../PokeInfo/volcarona.json'
const moveData = pokeData.moves;

export default function MovesList(moves) {
    return (
        <Stack sx={{
            justifyContent: "center",
            minWidth: "1000px"
        }}>
            {moveData.map((move, index) => {
                return (
                    <Move 
                        key={index}
                        name={move.move.name} 
                        url={move.move.url}
                    />
                )
            })}
        </Stack>
    )
}