import React from 'react'
import {withData} from "./DataProvider"

function SideBar() {
  return (
    <div className="sideBar">
        <h3>Ultimate Cat Lady Status</h3>
        <div className="benchmarks">
            <p></p>
        </div>
        <div className="progressBar">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default withData(SideBar);