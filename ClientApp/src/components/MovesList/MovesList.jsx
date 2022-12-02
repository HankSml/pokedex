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
        moves.map(move => {
            return (
                <Move 
                    name={moveData.move.name} 
                    url={moveData.move.url}
                />
            )
        })
        
    )
}