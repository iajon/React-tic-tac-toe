import { useState } from 'react'

import { Box, Text } from '@primer/components'

const Field = ({ id, xVal, isX, update, active, winStyle }) => {
    const [style, setStyle] = useState(winStyle)

    function onEntry() {
        if (active && style === 'field') {
            if (xVal){
                setStyle('field-x-hover')
            } else {
                setStyle('field-o-hover')
            }
        }
    }

    function onLeave() {
        if (active) {
            if (style.includes('hover')) {
                setStyle('field')
            }
        }
    }

    function onClick() {
        if (active) {
            setStyle('field-down')
        }
    }
    
    function onRelease() {
        if (active) {
            if (isX()){
                update(id, 1)
                setStyle('field-x')
            } else {
                update(id, -1)
                setStyle('field-o')
            }
        }
    }
    
    return (
        <div className={style}
            onMouseEnter={onEntry}
            onMouseLeave={onLeave}
            onMouseDown={onClick}
            onMouseUp={onRelease}
            key={id}>
        </div>
    )
}

export default Field
