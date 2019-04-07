import React from 'react'
import {Link} from "react-router-dom"


const style = {
    textDecoration: "none",
}

export default function Menu() {
  return (
    <div className="menuBar">
        <div className="menuHome">
            <Link style={style} to="/">Home</Link>
        </div>
        <div>
            <Link style={style}to="/felinefacts">Feline Facts</Link>
        </div>
        <div>Cute Captures</div>
    </div>
  )
}
