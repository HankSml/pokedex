import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar/Navbar';
import PokeInfo from './components/PokeInfo/PokeInfo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Stack direction="column" spacing="0">
      <Navbar />
      <PokeInfo />
    </Stack>
  )
}

export default App
