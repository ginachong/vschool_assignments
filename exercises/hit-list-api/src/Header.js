import React from "react"

function Header(){

    let style = {
        height: "50px",
        backgroundColor: "black",
        color: "red",
    }

    return(
        <div style={style}>
            <h2>Don Corleone's Hit List</h2>
        </div>
    )
}

export default Header