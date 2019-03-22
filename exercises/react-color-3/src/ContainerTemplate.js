import React from "react"

const ContainerTemplate = (props) => {

    let containerStyle = {
        border: "solid",
        borderWidth: "thin",
        borderColor: "gray"
    }
    
    let imgStyle = {
        maxWidth: "200px",
    }

    let titleFont = {
        fontFamily: "'Tangerine'",
    }

    let font = {
        fontFamily: "'Amiri'",
    }

    return (
        <div style={containerStyle}>
            <img style={imgStyle} src={props.img}></img>
            <h1 style={titleFont}>{props.title}</h1>
            <h3 style={font}>{props.subtitle}</h3>
            <p style={font}>{props.description}</p>
        </div>
    )
}

export default ContainerTemplate