import {Box, Pagehead} from '@primer/components'
import {ThemeProvider} from '@primer/components'

import './App.css';
import { useState } from 'react'

import NameLabel from './components/nameLabel/NameLabel'
import NameInput from './components/nameInput/NameInput'
import SubmitButton from './components/submitButton/SubmitButton'
import AppTitle from './components/appTitle/AppTitle'
import ControlLabel from './components/controlLabel/ControlLabel'
import ResetButton from './components/resetButton/ResetButton'
import Board from './components/board/Board'
import PlayerBox from './components/playerBox/PlayerBox'



function App() {
  // Constants

  // Win conditions
  const winCon = [
    [0, 1, 2, 0], 
    [0, 4, 8, 0], 
    [0, 3, 6, 0],
    [1, 4, 7, 0], 
    [2, 4, 6, 0], 
    [2, 5, 8, 0], 
    [3, 4, 5, 0], 
    [6, 7, 8, 0] 
  ]

  // Win/draw board state
  const ws = [[0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false]]
  const [winState, setWinState] = useState(ws)

  // Board id
  const [boardId, setBoardId] = useState(0)

  // Field id counter
  const [fieldIdCt, setFieldIdCt] = useState(0)

  // Board active
  const [boardActive, setBoardActive] = useState(true)

  // Player Name Inputs
  const [p1Name, setP1Name] = useState('')
  const [p2Name, setP2Name] = useState('')

  // Player names for scorecard
  const [p1ScoreCard, setP1sc] = useState('Player 1')
  const [p2ScoreCard, setP2sc] = useState('Player 2')

  // Color constants
  const blue = "0px 0px 4px 2px rgba(0, 89, 255, .4)"
  const red = "0px 0px 4px 2px rgba(255, 0, 0, .4)"
  const green = "0px 0px 12px 2px rgba(52, 185, 0, 0.7)"
  const grey = "0px 0px 4px 2px rgba(89, 89, 89, 0.25)"

  // Player colors
  const [p1Color, setP1Color] = useState(blue)
  const [p2Color, setP2Color] = useState(red)
  const [drawColor, setDrawColor] = useState(grey)

  // Scores
  const [p1Score, setP1Score] = useState(0)
  const [p2Score, setP2Score] = useState(0)
  const [drawScore, setDrawScore] = useState(0)

  // Functions
  function submitNames() {
    console.log('Names \'%s\' and \'%s\' submitted.', p1Name, p2Name)
    if (p1Name !== '') {
      setP1sc(p1Name)
    }
    if (p2Name !== '') {
      setP2sc(p2Name)
    }
  }

  function resetBoard() {
    setBoardId(boardId+1)
    setBoardActive(true)
    setWinState(ws)
    setP1Color(blue)
    setP2Color(red)
    setDrawColor(grey)

    // Reset zeros in winCon
    for (var i = 0; i < winCon.length; i++) {
      winCon[i][3] = 0;
    }
  }

  function gameOver(value) {
    console.log('this')
    if (boardActive === true) {
      setBoardActive(false)
      setBoardId(boardId+1)

      if (value === 1) {
        console.log('that')
        setP1Score(p1Score+1)
        setP1Color(green)
        setP2Color(grey)
      } else if (value === -1) {
        setP2Score(p2Score+1)
        setP2Color(green)
        setP1Color(grey)
      } else {
        console.log('the other')
        setDrawScore(drawScore+1)
        setDrawColor(green)
        setP1Color(grey)
        setP2Color(grey)
      }
    }
  }

  return (
    <ThemeProvider>
      <div className="App">
        {/*---Options Frame---*/}
        <Box borderColor="border.primary" 
             borderWidth={1} 
             borderStyle="solid" 
             borderRadius="10px" 
             width="243px"
             height="455px"
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
              <ResetButton resetBoard={resetBoard}/>
          </Box>         
        </Box> 

        {/*---Board Frame---*/}
        <Box borderColor="border.primary" 
            borderWidth={1}
            borderStyle="solid"
            borderRadius="10px"
            margin="10px"
            padding="10px"
            width="328px"
            height="435px"
            boxShadow="0px 0px 12px 0px rgba(0, 0, 0, .1)">
              <Board id={boardId} 
                winCon={winCon} 
                gameState={winState}
                setGameState={setWinState} 
                gameOver={gameOver} 
                active={boardActive}
                fId={fieldIdCt}
                setFId={setFieldIdCt}/>

              {/*---Player Win/Loss Frame---*/}
              <Box display="grid" 
                gridTemplateColumns="1fr 1fr 1fr" 
                width="305px">

                  <PlayerBox name={p1ScoreCard} val={p1Score} w="90px" m="10px" bg={p1Color}/>
                  <PlayerBox name={'Draw'} val={drawScore} w="60px" m="10px" bg={drawColor}/>
                  <PlayerBox name={p2ScoreCard} val={p2Score} w="90px" bg={p2Color}/>

              </Box>
          </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
