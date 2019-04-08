import React from 'react'
import {withData} from "./DataProvider"

function CuteCaptures(props) {

const height = props.height.toString()
const width = props.width.toString()

  return (
    <div className="capturePage">
      <h1>Cute Captures</h1>
      <img alt="cute kitten" src={"https://placekitten.com/" + height + "/" + width}></img>
      <div className="buttonContainer">
        <button onClick={(e) => {props.photoButton(e)}}>Click for a cat photo</button>
      </div>
    </div>
  )
}

export default withData(CuteCaptures);
