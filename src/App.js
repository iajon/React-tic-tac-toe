import {Box, Pagehead} from '@primer/components'
import {ThemeProvider} from '@primer/components'
//import '@primer/components'

import NameLabel from './components/nameLabel/NameLabel'
import NameInput from './components/nameInput/NameInput'
import SubmitButton from './components/submitButton/SubmitButton'
import AppTitle from './components/appTitle/AppTitle'
import GridBox from './components/gridBox/GridBox'
import ControlLabel from './components/controlLabel/ControlLabel'
import ResetButton from './components/resetButton/ResetButton'


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
          
          {/*---Title Frame---*/}
          <Box display="grid" 
            gridTemplateColumns="1fr" 
            borderColor="border.primary" 
            borderWidth={1}
            borderStyle="solid"
            borderRadius="10px"
            margin="10px"
            padding="10px"
            width="200px"
            boxShadow="0px 0px 12px 0px rgba(0, 0, 0, .1)">
              <AppTitle/>
          </Box>

          {/*---Name Submission Frame---*/}
          <Box display="grid" 
            gridTemplateColumns="1fr" 
            borderColor="border.primary" 
            borderWidth={1}
            borderStyle="solid"
            borderRadius="10px"
            margin="10px"
            padding="10px"
            width="200px"
            boxShadow="0px 0px 12px 0px rgba(0, 0, 0, .1)">

            <NameLabel text='Player 1'/>
            <NameInput updateValue={setP1Name}/>

            <NameLabel text='Player 2'/>
            <NameInput updateValue={setP2Name}/>

            <SubmitButton submitValue={submitNames}/>
          </Box>

          {/*---Game Controls Frame---*/}
          <Box display="grid" 
            gridTemplateColumns="1fr" 
            borderColor="border.primary" 
            borderWidth={1}
            borderStyle="solid"
            borderRadius="10px"
            margin="10px"
            padding="10px"
            width="200px"
            boxShadow="0px 0px 12px 0px rgba(0, 0, 0, .1)">
              <ControlLabel/>
              <ResetButton/>
          </Box>
        </Box> 
      </div>
    </ThemeProvider>
  );
}

export default App;
