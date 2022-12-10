import {
    Box, 
    Typography, 
    Link, 
    Container, 
    Stack, 
    Grid 
} from '@mui/material'

import pokeData from './volcarona.json';
import capitalize from '../../utils/capitalize';

export default function PokeInfo() {
    return (
        <Grid container spacing={1} sx={{ backgroundColor: 'primary.dark', flexGrow: 1, maxWidth: 800}}>
            <Grid item xs={12}>     
                <Typography component="h1" variant="h4" align="center">
                    name: {pokeData.name}
                </Typography>
            </Grid>
            <Grid item xs={8}>
                    <Box
                        component="img"
                        sx={{
                            width: 250,
                            height: 250,
                        }}
                        alt="pokemon sprite"
                        src={pokeData.sprites.other.home.front_default}
                    />
            </Grid>
            <Grid item xs={4} sx={{ mx: "auto"}}>
                <Stack direction="column">
                    <Typography component="h2" variant="h5">
                        Type:
                    </Typography>
                    <Typography component="h3" variant="h6">
                        { capitalize(pokeData.types[0].type.name) } | { capitalize(pokeData.types[1].type.name) }
                    </Typography>
                    <Typography component="h2" variant="h5">
                        Abilities:
                    </Typography>
                    <Typography>
                        {capitalize(pokeData.abilities[0].ability.name)} | { capitalize(pokeData.abilities[1].ability.name)}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}