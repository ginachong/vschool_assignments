import React from 'react';
import './App.css';
import FelineFact from "./FelineFact"
import HomePage from "./HomePage"
import SideBar from "./SideBar"
import Menu from "./Menu"
import {Switch, Route} from "react-router-dom"

function App(props){
  return(
      <div>
        <SideBar {...props}/>
        <Menu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route {...props} path="/felinefacts" component={FelineFact} />  
        </Switch>
      </div>
  )
}


export default App;

//----> *Note: line 16 adding props to a Route