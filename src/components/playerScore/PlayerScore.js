import { Text } from '@primer/components'

const PlayerScore = ({ score }) => {
    return (
        <Text fontWeight="bold" 
                fontSize="14px" 
                textAlign="left" 
                marginBottom="10px">
                    Score: {score}
        </Text>
    )
}

export default PlayerScore
