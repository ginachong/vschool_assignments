import React from 'react';
import {BrowserRouter} from "react-router-dom"
import './App.css';
import StarWarsPage from "./StarWarsPage"

function App(){
  return(
    <BrowserRouter>
      <StarWarsPage />
    </BrowserRouter>
  )
}


export default App;
