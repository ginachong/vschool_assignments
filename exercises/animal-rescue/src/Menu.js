import React from 'react'
import {Link} from "react-router-dom"

export default function Menu() {
  return (
    <div className="menuBar">
      <Link to="/">Home</Link>
      <Link to="/felinefacts">Feline Facts</Link>
    </div>
  )
}
