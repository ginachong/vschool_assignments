import React from "react"


function Square(props){

    let boxStyle = {
        height: "300px",
        width: "300px",
        border: "solid",
        backgroundColor: props.color,
        position: "relative",
    }

    let buttonStyle = {
        position: "absolute",
    }

        return(
            <div style={boxStyle}>
                <div></div>
                <button onClick={() => {props.handler(props.id); props.soundEffect()}} style={buttonStyle}>Reset</button>
            </div>
        )
}


export default Square