import { Text } from '@primer/components'

const NameLabel = ({ text }) => {
    return (
        <Text fontWeight="bold" 
            fontSize="14px" 
            textAlign="left" 
            marginBottom="10px">
                {text}
        </Text>
    )
}

export default NameLabel
