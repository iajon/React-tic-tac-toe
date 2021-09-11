import { TextInput } from '@primer/components'

const NameInput = ({ updateValue }) => {
    return (
        <TextInput aria-label="Name" 
            name="name" 
            placeholder={'Enter name here'} 
            contrast 
            marginBottom="10px"
            onChange={event => updateValue(event.target.value)}/>
    )
}

export default NameInput
