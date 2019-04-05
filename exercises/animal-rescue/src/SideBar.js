import React from 'react'
import {withData} from "./DataProvider"

function SideBar() {
  return (
    <div className="sideBar">
        <h3 className="sideHeader">Ultimate Cat Lady Status</h3>
        <div className="benchmarks">
            <p>cat ninja</p>
            <p>cat advocate</p>
            <p>cat lover</p>
            <p>no soul</p>
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