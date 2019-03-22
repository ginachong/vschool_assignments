import React from "react"


const InfoBox = (props) => {
    let styles = {
        backgroundColor: props.backgroundColor,
        padding: "20px",
        textAlign: "center",

    }
    return(
      <div style={styles} className="colorInfoBox">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.info}</p>
      </div>
    )
  }



export default InfoBox