import React from "react"
import Navbar from "./Navbar"

function Header(){
    return(
        <div>
            <Navbar />
            <div className="headerContainer">
                <div className="headerOverlay"></div>
                <div className="headerText">
                    <h1>Clean Blog</h1>
                    <h2>A Blog Theme by Start Bootstrap</h2>
                </div>
            </div>
        </div>
    )
}


export default Header