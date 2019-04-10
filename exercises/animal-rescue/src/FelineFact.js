import React from 'react'
import {withData} from "./DataProvider"

function FelineFact(props) {

  return (
        <div className="felineFactsText">
            <div className="ffHeader">
                <div className="ffHeaderBox"></div>
                <div className="ffHeaderBorder"></div>
                <h1>FELINE FACTS</h1>
            </div>            
            <div className="ffFacts">
                <div className="ffFactsBox"></div>
                <p>{props.displayFact}</p>
            </div>   
            <div className="ffButton">
                <button onClick={(e) => {props.newFact(e)}}>Click for a fact</button>
            </div>
        </div>
  )
}

export default withData(FelineFact);