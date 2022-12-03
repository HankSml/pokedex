import React from 'react';
import {
    Box, 
    Typography, 
    Link, 
    Container, 
    Stack, 
    Grid 
} from '@mui/material'
import Move from './Move'

import pokeData from '../PokeInfo/volcarona.json'
const moveData = pokeData.moves;

export default function MovesList(moves) {
    return (
        <Box>
            {moveData.map((move, index) => {
                return (
                    <Move 
                        key={index}
                        name={move.move.name} 
                        url={move.move.url}
                    />
                )
            })}
        </Box>
    )
}