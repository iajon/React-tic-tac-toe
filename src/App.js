import {Box, Text} from '@primer/components'
import {ThemeProvider} from '@primer/components'
import '@primer/components'

import NameHeader from './components/nameHeader/NameHeader'
import NameInput from './components/nameInput/NameInput'
import SubmitButton from './components/submitButton/SubmitButton'


import './App.css';
import { useState } from 'react'


function App() {
  // Constants

  // Player Name Inputs
  const [p1Name, setP1Name] = useState('')
  const [p2Name, setP2Name] = useState('')

  // Functions
  function submitNames() {
    console.log('Names \'%s\' and \'%s\' submitted.', p1Name, p2Name)
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Box borderColor="border.primary" 
             borderWidth={1} 
             borderStyle="solid" 
             borderRadius="10px" 
             margin="10px">
          <Box display="grid" 
               gridTemplateColumns="1fr" 
               borderColor="border.primary" 
               borderWidth={1}
               borderStyle="solid"
               borderRadius="10px"
               margin="10px"
               padding="10px"
               width="200px">
            <Text fontWeight="bold" fontSize="14px" textAlign="left" marginBottom="10px">Player 1</Text>
            <NameInput updateValue={setP1Name}/>
            <Text fontWeight="bold" fontSize="14px" textAlign="left" marginBottom="10px">Player 2</Text>
            <NameInput updateValue={setP2Name}/>
          <SubmitButton submitValue={submitNames}/>
          
          </Box>
        </Box> 
      </div>
    </ThemeProvider>
  );
}

export default App;
