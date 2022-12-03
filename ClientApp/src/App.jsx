import { useState } from 'react';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Stack } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import PokeInfo from './components/PokeInfo/PokeInfo';
import MovesList from './components/MovesList/MovesList'
import './App.css'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Stack direction="column" spacing="0">
        <Navbar />
        <PokeInfo />
        <MovesList />
      </Stack>
    </QueryClientProvider>
  )
}

export default App
