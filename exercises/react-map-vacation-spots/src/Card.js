import React from "react"


function Card(props){

    let cardStyle = {
        border: "solid",
        borderWidth: "thin",
        borderColor: "#cecece",
        backgroundImage: `url(${props.backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        gridArea: props.key,
        textAlign: "left",
        paddingLeft: "30px"
    }

    let fontStyle = {
        color: "white",
    }
    
        return(
        <div className="cards" style={cardStyle}>
            <h3 style={fontStyle}>{props.vacay.place}</h3>
            <h5 style={fontStyle}>{props.vacay.price}</h5>
            <p style={fontStyle}>{props.vacay.timeToGo}</p>
        </div>
        )}


export default Card