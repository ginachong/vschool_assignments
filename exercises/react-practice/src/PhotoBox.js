import React from "react"

let h2Style = {
    fontFamily: "'Tangerine', cursive",
}

let pStyle = {
    fontFamily: "'Amiri', serif",
}

const PhotoBox = (props) => {
    return (
        <div>
            <img src={props.img}></img>
            <div className="text">
                <h2 style={h2Style}>{props.dishName}</h2>
                <p style={pStyle}>>for</p>
                <h2 style={h2Style}>>{props.clientName}</h2>
            </div>
        </div>
    )
}

export default PhotoBox