import React from 'react';
import './App.css';
import {withUglyProvider} from "./UglyProvider"
import UglyThings from "./UglyThings"
import UglyForm from "./UglyForm"

function App(props){

const mappedUglyThings = props.uglyArray.map((item, index) => <UglyThings index={index} key={index} {...props}/>)

  return(
      <div className="container">
        <UglyForm {...props}/>
        <div className="posts">
          {mappedUglyThings}
        </div>
      </div>
  )
}

export default withUglyProvider(App);
