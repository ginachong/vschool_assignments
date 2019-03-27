import React from "react"

let style = {
    border: "solid",
    width: "100px",
    height: "100px",
    position: "relative",
    display: "inline-block",
}

let numberStyle = {
    position: "absolute",
    fontSize: "50px",
    left: "35%",
}

function Die(props) {
    return (
        <div style={style} className="die">
            <p style={numberStyle}>{props.num}</p>
            <input type="checkbox"></input>
        </div>
    )
}

export default Die