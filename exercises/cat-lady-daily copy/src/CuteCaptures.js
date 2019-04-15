import React from 'react'
import {withData} from "./DataProvider"

function CuteCaptures(props) {

const width = props.width.toString()
// const height = props.height.toString()

  return (
    <div className="capturePage">
            <div className="ccHeader">
                <div className="ccHeaderBox"></div>
                <div className="ccHeaderBorder"></div>
                <h1>CUTE CAPTURES</h1>
            </div>
            <div className="ccPhotos">
                <div className="ccPhotosBox"></div>
                <img alt="cute kitten" src={"https://placekitten.com/" + width + "/300"}></img>
            </div>        
      <div className="ccButton">
        <button onClick={(e) => {props.photoButton(e)}}>Click for a photo</button>
      </div>
    </div>
  )
}

export default withData(CuteCaptures);
