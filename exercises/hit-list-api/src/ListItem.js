import React from "react"

function ListItem(props){

    let containerStyle = {
        position: "relative",
        display: "inline-block"
    }

    let imageStyle = {
        maxHeight: "150px",
    }

    let nameStyle = {
        position: "absolute",
        textAlign: "center",
        height: "25%",
        width: "100%",
        bottom: 0,
        backgroundColor: "blue",
        opacity: "0.7",
    }

    let textStyle = {
        color: "white",
    }

    return(
        <div style={containerStyle} className="listContainer">
            <img style={imageStyle} alt="hit list item" src={props.item.image}></img>
            <div style={nameStyle} className="name">
                <p style={textStyle}>{props.item.name}</p>
            </div>
        </div>
    )
}


export default ListItem