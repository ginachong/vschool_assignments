import React from "react"

const BoxTemplate = (props) => {
    return (
        <div className="box">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <hr/>
            <p>{props.info}</p>
        </div>
    )
}

export default BoxTemplate