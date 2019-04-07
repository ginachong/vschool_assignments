import React from 'react'
import {withData} from "./DataProvider"

function FelineFact(props) {
  return (
    <div className="felineFactsPage">
        <div className="felineFactsText">
            <h1>FELINE FACTS</h1>
            <p>{props.displayFact}</p>
            <div className="buttonContainer">
                <button onClick={(e) => {props.newFact(e)}}>Click for a fact</button>
            </div>
        </div>
    </div>
  )
}

export default withData(FelineFact);