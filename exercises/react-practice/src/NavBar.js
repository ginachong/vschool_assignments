
import React from "react"


const NavBar = () => {
    return(
        <nav>
            <p>Menu</p>
            <div className="dropdown">
                <p>Portfolio</p>
                <a href="./About">About</a>
                <p>Investment</p>
                <p>Contact</p>
                <p>Home</p>
            </div>
        </nav>
    )
}


export default NavBar;

