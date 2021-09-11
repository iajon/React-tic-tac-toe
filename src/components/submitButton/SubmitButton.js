import { Button } from '@primer/components'

const SubmitButton = ( {submitValue} ) => {
    return (
        <Button 
            onClick={submitValue}
        >
            Submit Names
        </Button>
    )
}

export default SubmitButton
