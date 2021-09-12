import PropTypes from 'prop-types'

import { Box } from '@primer/components'

import PlayerName from '../playerName/PlayerName'
import PlayerScore from '../playerScore/PlayerScore'

const PlayerBox = ({ name, val, w, m, bg }) => {
    return (
        <Box display="grid" 
            gridTemplateColumns="1fr" 
            borderColor="border.primary" 
            borderWidth={1}
            borderStyle="solid"
            borderRadius="10px"
            padding="10px"
            width={w}
            marginRight={m}
            boxShadow={bg}>
                <PlayerName name={name}/>
                <PlayerScore score={val}/>
        </Box>
    )
}

PlayerBox.defaultProps = {
    bg: "0px 0px 2px 2px rgba(89, 89, 89, 0.25)"
}

export default PlayerBox
