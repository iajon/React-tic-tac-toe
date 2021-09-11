import { Box, Text } from '@primer/components'

const ControlLabel = () => {
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
                    Game Controls
            </Text>

        </Box>
    )
}

export default ControlLabel
