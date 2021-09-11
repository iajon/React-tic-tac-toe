import { ButtonDanger } from '@primer/components'

const ResetButton = ( {resetBoard} ) => {
    return (
        <ButtonDanger 
            onClick={resetBoard}>
            Reset Board
        </ButtonDanger>
    )
}

export default ResetButton
