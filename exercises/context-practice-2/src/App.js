import React, { Component } from 'react';
import './App.css';
import SeasonProvider, {withSeasonProvider} from "./SeasonProvider"

function App(props){
  return(
    <div className={props.season}>
      <h1>It is now {props.season}</h1>
      <button onClick={() => {props.handleSeason("winter")}}>Click to change to Winter</button>
      <button onClick={() => {props.handleSeason("spring")}}>Click to change to Spring</button>
      <button onClick={() => {props.handleSeason("summer")}}>Click to change to Summer</button>
      <button onClick={() => {props.handleSeason("fall")}}>Click to change to Fall</button>
    </div>
  )
}


export default withSeasonProvider(App)