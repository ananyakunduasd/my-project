import React,{useState} from 'react'
import Rectangle from './rectangle'

const Page = () => {
    const [color,colorChange] =useState("red") 
    const [hide,displayShow] = useState("hidden")

    const changeColor =()=>{

        colorChange("green")
            displayShow("")
        
    }

    const butts = {
        position:"absolute",
        top:"90%",
        left:"50%",
        transform:"translate(-50%,-50%)"
    }

    const buttons = {
        height:"3rem",
        width:"100%",
        background:"red",
        color:"white",
        border:"none"
    }

    const text = {
        visibility:hide, 
        marginBottom:"0px"
    }
    
    return (
        <div>
            <Rectangle color={color}/>
            <div style={butts}>
                <button style={buttons} onClick={changeColor} >Press</button>
                <p style={text}>Button Clicked</p>
            </div>
           
           
        </div>
    )
}

export default Page