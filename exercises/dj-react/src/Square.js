import React from "react"


function Square(props){

    let boxStyle = {
        height: "300px",
        width: "300px",
        border: "solid",
        backgroundColor: props.color,
    }

        return(
            <div style={boxStyle}></div>
        )
}


export default Square