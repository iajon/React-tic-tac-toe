import { render } from '@testing-library/react'
import { useState } from 'react'

import Field from '../field/Field'

const Board = ({ id, winCon, gameState, setGameState, gameOver, active }) => {
    const [fCount, setFCount] = useState(0)

    // Handle win condition
    function handleWin(value) {
        setFCount(0)
        gameOver(value)
    }

    // Returns previous value of isX and sets new value
    const [xVal, setX] = useState(true)
    function isX() {
        var temp = xVal;
        setX(!xVal)
        return (temp)
    }

    // Update list of win conditions
    function updateWinCon(id, value) {
        if (active) {
            gameState[id][0] = value;
            for (var i = 0; i < winCon.length; i++) {
                for (var j = 0; j < 3; j++) {
                    if (winCon[i][j] !== null) {
                        if (winCon[i][j] === id) {
                            var current = winCon[i][3];
                            var next = current + value;
                            if (Math.abs(next) === 3) {
                                for (var a = 0; a < 3; a++) {
                                    gameState[winCon[i][a]][1] = true;
                                }
                                setGameState(gameState)
                                if (value === 1) {
                                    handleWin(1)
                                } else if (value === -1) { 
                                    handleWin(-1) 
                                }    
                                return(null);
                            } else if (Math.abs(next) < Math.abs(current)) {
                                winCon[i][3] = null;
                            } else if (Math.abs(next) > Math.abs(current)) {
                                winCon[i][3] += value;
                            } else {
                                console.log('FAILED')
                            }
                        }
                    }
                }  
            }
            if (fCount === 8) {
                setGameState(gameState)
                console.log(fCount)
                handleWin(0)
                setFCount(0)
            }
            setFCount(fCount+1)   
        }
    }

    // Generates a field
    function makeFields(i, s) {
        return (
            <Field id={i} xVal={xVal} isX={isX} update={updateWinCon} active={active} winStyle={s}/>
        )
    }

    if (active) {
        var fList = []
        for (var i = 0; i < 9; i++) {
            fList.push(makeFields(i, 'field'))
        }
        return (
            <div className='board' key={id}>
                {fList}
            </div>
        )
    }
    else {
        var wList = []
        var style = ''
        for (var i = 0; i < 9; i++) {
            style = 'field-_-loss'
            if (gameState[i][1] === true) { style = 'field-_-win' }

            if (gameState[i][0] === 1) {
                style = style.replace('_', 'x')

            } else if (gameState[i][0] === -1){
                style = style.replace('_', 'o')

            } else { style = style.replace('_', 'empty') }
            wList.push(makeFields(i, style))
        }
        return (
            <div className='board' key={id}>
                {wList}
            </div>
        )
    }
}

export default Board
