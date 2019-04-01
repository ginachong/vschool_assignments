import React from "react"

function Box(props){

    let style = {
        backgroundColor: "#" + props.item.hex,
        padding: "30px",
        border: "solid",
        borderWidth: "thin",
    }

    return(
        <div style={style}></div>
    )
}



export default Box