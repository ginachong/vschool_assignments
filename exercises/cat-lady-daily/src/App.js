import React from 'react';
import './App.css';
import FelineFact from "./FelineFact"
import HomePage from "./HomePage"
import SideBar from "./SideBar"
import Menu from "./Menu"
import {Switch, Route} from "react-router-dom"
import CuteCaptures from './CuteCaptures';
import Footer from "./Footer"
import TicTacToe from "./TicTacToe"

function App(props){
  return(
      <div>
        <SideBar {...props}/>
        <Menu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route {...props} path="/felinefacts" component={FelineFact} /> 
          <Route {...props} path="/cutecaptures" component={CuteCaptures} /> 
          <Route {...props} path="/tictactoe" component={TicTacToe} />
        </Switch>
        <Footer />
      </div>
  )
}


export default App;

//----> *Note: line 17 adding props to a Route
