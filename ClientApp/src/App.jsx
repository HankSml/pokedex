import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Navbar from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm">
      <Navbar />
      <Box 
        sx={{
          width: 500,
          height: 500,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'secondary.dark'
          },
        }}
      />
    </Container>
    
  )
}

export default App
