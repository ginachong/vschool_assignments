import React from 'react'
import {withData} from "./DataProvider"
import ReactPlayer from "react-player"
import tomcat from "./TomCat.mp3"


function TicTacToe(props){

let cat1 = {visibility: props.catone}
let cat2 = {visibility: props.cattwo}
let cat3 = {visibility: props.catthree}
let cat4 = {visibility: props.catfour}
let cat5 = {visibility: props.catfive}
let cat6 = {visibility: props.catsix}
let cat7 = {visibility: props.catseven}
let cat8 = {visibility: props.cateight}
let cat9 = {visibility: props.catnine}

let dog1 = {visibility: props.dog1}
let dog2 = {visibility: props.dog2}
let dog3 = {visibility: props.dog3}
let dog4 = {visibility: props.dog4}
let dog5 = {visibility: props.dog5}
let dog6 = {visibility: props.dog6}
let dog7 = {visibility: props.dog7}
let dog8 = {visibility: props.dog8}
let dog9 = {visibility: props.dog9}

ReactPlayer.canPlay("/src/TomCat.mp3")
    return(
        <div className="gamePage">
            <ReactPlayer url={tomcat} playing={props.catPlaying} />
            <div className="catBox">
                <div className="cat" id="one"  onClick={(e) => {props.handleGameClick(e)}}>
                    <img alt="cat1" style={cat1} className="catImg" src="http://www.stickpng.com/assets/images/5845e1677733c3558233c0ee.png"></img>
                </div>
                <div className="cat" id="two"  onClick={(e) => {props.handleGameClick(e)}}>
                    <img className="catImg" style={cat2} src="http://www.stickpng.com/assets/images/5845e1677733c3558233c0ee.png"></img>
                </div>
                <div className="cat" id="three"  onClick={(e) => {props.handleGameClick(e)}}>
                    <img className="catImg" style={cat3} src="http://www.stickpng.com/assets/images/5845e1677733c3558233c0ee.png"></img>
                </div>
                <div className="cat" id="four"  onClick={(e) => {props.handleGameClick(e)}}>
                    <img className="catImg" style={cat4} src="http://www.stickpng.com/assets/images/5845e1677733c3558233c0ee.png"></img>
                </div>
                <div className="cat" id="five"  onClick={(e) => {props.handleGameClick(e)}}>
                    <img className="catImg" style={cat5} src="http://www.stickpng.com/assets/images/5845e1677733c3558233c0ee.png"></img>
                </div>
                <div className="cat" id="six"  onClick={(e) => {props.handleGameClick(e)}}>
                    <img className="catImg" style={cat6} src="http://www.stickpng.com/assets/images/5845e1677733c3558233c0ee.png"></img>
                </div>
                <div className="cat" id="seven"  onClick={(e) => {props.handleGameClick(e)}}>
                    <img className="catImg" style={cat7} src="http://www.stickpng.com/assets/images/5845e1677733c3558233c0ee.png"></img>
                </div>
                <div className="cat" id="eight"  onClick={(e) => {props.handleGameClick(e)}}>
                    <img className="catImg" style={cat8} src="http://www.stickpng.com/assets/images/5845e1677733c3558233c0ee.png"></img>
                </div>
                <div className="cat" id="nine"  onClick={(e) => {props.handleGameClick(e)}}>
                    <img className="catImg" style={cat9} src="http://www.stickpng.com/assets/images/5845e1677733c3558233c0ee.png"></img>
                </div>
            </div>
            <div className="dogBox">
                <div className="dog">
                    <img style={dog1} className="dogImg" src="http://www.stickpng.com/assets/images/5845e755fb0b0755fa99d7f3.png"></img>
                </div>
                <div className="dog">
                    <img style={dog2}  className="dogImg" src="http://www.stickpng.com/assets/images/5845e755fb0b0755fa99d7f3.png"></img>
                </div>
                <div className="dog">
                    <img style={dog3}  className="dogImg" src="http://www.stickpng.com/assets/images/5845e755fb0b0755fa99d7f3.png"></img>
                </div>
                <div className="dog">
                    <img style={dog4}  className="dogImg" src="http://www.stickpng.com/assets/images/5845e755fb0b0755fa99d7f3.png"></img>
                </div>
                <div className="dog">
                    <img style={dog5}  className="dogImg" src="http://www.stickpng.com/assets/images/5845e755fb0b0755fa99d7f3.png"></img>
                </div>
                <div className="dog">
                    <img style={dog6}  className="dogImg" src="http://www.stickpng.com/assets/images/5845e755fb0b0755fa99d7f3.png"></img>
                </div>
                <div className="dog">
                    <img style={dog7}  className="dogImg" src="http://www.stickpng.com/assets/images/5845e755fb0b0755fa99d7f3.png"></img>
                </div>
                <div className="dog">
                    <img style={dog8}  className="dogImg" src="http://www.stickpng.com/assets/images/5845e755fb0b0755fa99d7f3.png"></img>
                </div>
                <div className="dog">
                    <img style={dog9}  className="dogImg" src="http://www.stickpng.com/assets/images/5845e755fb0b0755fa99d7f3.png"></img>
                </div>
            </div>
            <div className="scoreBox">
                <div className="messageBox">
                    <h1>{props.message}</h1>
                </div>
                <button onClick={(e) => {props.playAgain(e)}}>Play Again</button>
            </div>
        </div>
    )
}


export default withData(TicTacToe);

//NOTES:
//-had trouble importing my audio file.
//-imported it at the top as tomcat
//-then referenced it as such in the url
//used react player package