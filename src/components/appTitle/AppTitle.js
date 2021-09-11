import { Heading, Text } from '@primer/components'

const AppTitle = () => {
    return (
        <div>
            <Heading as="h1"
                fontSize={5}>
                    Tic Tac Toe
            </Heading>
            <Text fontWeight="bold" 
                fontSize="12px" 
                textAlign="center" 
                marginBottom="10px">
                    Internship Challenge
            </Text>
        </div>
    )
}

export default AppTitle
