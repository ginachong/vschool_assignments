import React from 'react'
import {Link} from "react-router-dom"
import {withData} from "./DataProvider"
import {withRouter} from "react-router-dom"

function Menu(props) {

    const style = {
        textDecoration: "none",
        fontFamily: "'Arapey', serif",
    }

    const backgroundStyle = {
        backgroundColor: props.backgroundColor,
    }

    return (
        <div style={backgroundStyle} className={props.location.pathname === "/" ? "homeBar" : "menuBar"}>
            <div className="menuHome">
                <Link style={style} to="/">Home</Link>
            </div>
            <div>
                <Link style={style} to="/felinefacts">Feline Facts</Link>
            </div>
            <div>
                <Link style={style} to="/cutecaptures">Cute Captures</Link>
            </div>
        </div>
    )
}

export default withRouter(withData(Menu))
