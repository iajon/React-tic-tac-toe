import PropTypes from 'prop-types'

import { Box, Text } from '@primer/components'



const PlayerName = ({ name }) => {
    return (
        <Box borderColor="border.primary" 
            borderBottomWidth={1} 
            borderBottomStyle="solid"
            paddingBottom="10px"
            marginBottom="10px"
            textAlign="left">

            <Text fontWeight="bold" 
                fontSize="14px" 
                textAlign="left" 
                marginBottom="10px">
                    {name}
            </Text>
        </Box>
    )
}

PlayerName.defaultProps = {
    name: 'Player'
}

export default PlayerName
