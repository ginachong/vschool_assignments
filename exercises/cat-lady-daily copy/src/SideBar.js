import React from 'react'
import {withData} from "./DataProvider"
import {withRouter} from "react-router-dom"
import Confetti from 'react-confetti'

function SideBar(props) {

let style1 = {
    backgroundColor: props.color1
}
let style2 = {
    backgroundColor: props.color2
}
let style3 = {
    backgroundColor: props.color3
}
let style4 = {
    backgroundColor: props.color4
}
let style5 = {
    backgroundColor: props.color5
}
let style6 = {
    backgroundColor: props.color6
}
let style7 = {
    backgroundColor: props.color7
}
let style8 = {
    backgroundColor: props.color8
}
let style9 = {
    backgroundColor: props.color9
}
let style10 = {
    backgroundColor: props.color10
}

  return (
    <div className={props.location.pathname === "/" ? "bottomBar" : "sideBar"}>           
        <Confetti className="confetti" recycle={props.recycle} />
        <h3 className="sideHeader">Cat Lady Nirvana</h3>
        <img alt="cat lady" className="catLadyImg" src="http://joyang.ca/wp-content/uploads/2013/04/2010_CatLady.jpg"></img>
        <h2 className="progressHeader">Progress Bar</h2>
        <div className="benchmarks">
            <p>no soul</p>
            <p>catwondo white belt</p>
            <p>cat cafe hipster</p>
            <p>#catstagrammer</p>
            <p>cat ninja</p>
            <p>cat whisperer</p>        
        </div>
        <div className="progressBar">
          <div style={style10} className="bar12"></div>
          <div style={style10} className="bar11"></div>
            <div style={style10} className="bar10"></div>
            <div style={style9} className="bar9"></div>
            <div style={style8} className="bar8"></div>
            <div style={style7} className="bar7"></div>
            <div style={style6} className="bar6"></div>
            <div style={style5} className="bar5"></div>
            <div style={style4} className="bar4"></div>
            <div style={style3} className="bar3"></div>
            <div style={style2} className="bar2"></div>
            <div style={style1} className="bar1"></div>
        </div>
        <div className="reset">
            <button onClick={(e) => {props.resetButton(e)}}>Reset</button>
        </div>
    </div>
  )
}

export default withRouter(withData(SideBar));

// NOTE:
// -changing static components: 
//     -import withRouter so that you have access to location path as props
//     -create a ternary in the container div so that the styling changes according to the pathway