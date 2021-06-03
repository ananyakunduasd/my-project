import React from 'react'

const Rectangle = (props) => {

    const rectangle = {
        height:"50%",
        width:"50%",
        background:props.color,
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)"
    }
    
    return (
            <div style={rectangle}>
            </div>
    )
}

export default Rectangle