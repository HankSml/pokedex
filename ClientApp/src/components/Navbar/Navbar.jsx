import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton, 
    Typography, 
    Stack, 
    Button,
} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';


export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Pokemon Draft App
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">Pokedex</Button>
                    <Button color="inherit">Builder</Button>
                    <Button color="inherit">Type Checker</Button>
                    <Button color="inherit">Account</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}