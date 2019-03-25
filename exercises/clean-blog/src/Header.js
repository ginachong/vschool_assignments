import React from "react"
import Navbar from "./Navbar"

function Header(){
    return(
        <div>
            <Navbar />
            <div className="headerContainer">
                <img alt="desk with laptop" src="https://i.pinimg.com/originals/06/2b/7f/062b7fb9cfd2a6351f4e0850c1e1ed50.jpg"></img>
                <div className="header">
                    <h1>Clean Blog</h1>
                    <h2>A Blog Theme by Start Bootstrap</h2>
                </div>
            </div>
        </div>
    )
}


export default Header