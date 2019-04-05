import React from 'react'
import {Link} from "react-router-dom"

export default function Menu() {
  return (
    <div className="menuBar">
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/felinefacts">Feline Facts</Link>
        </div>
    </div>
  )
}
