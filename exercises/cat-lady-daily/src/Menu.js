import React from 'react'
import {Link} from "react-router-dom"
import {withData} from "./DataProvider"
import {withRouter} from "react-router-dom"

function Menu(props) {

    const style = {
        textDecoration: "none",
        fontFamily: "'Arapey', serif",
        color: "black",
        // visibility: props.visibility,
    }

    // const backgroundStyle = {
    //     backgroundColor: props.backgroundColor,
    // }

    return (

        <div className="menu">
            <img alt="menu icon" className="menuImg" src="https://www.freeiconspng.com/uploads/menu-icon-16.jpg"></img>
             <div className="dropdown">
                <Link className="dropdownLinks" style={style} to="/">Home</Link>
                <Link className="dropdownLinks" style={style} to="/felinefacts">Feline Facts</Link>
                <Link className="dropdownLinks" style={style} to="/cutecaptures">Cute Captures</Link>
                <Link className="dropdownLinks" style={style} to="/tictactoe">Tic Cat Toe</Link>
             </div>
        </div>

        // <div style={backgroundStyle} className={props.location.pathname === "/" ? "homeMenuBar" : "menuBar"}>
        //     <div className="menuHome">
        //         <Link style={style} to="/">Home</Link>
        //     </div>
        //     <div>
        //         <Link style={style} to="/felinefacts">Feline Facts</Link>
        //     </div>
        //     <div>
        //         <Link style={style} to="/cutecaptures">Cute Captures</Link>
        //     </div>
        // </div>
    )
}

export default withRouter(withData(Menu))
