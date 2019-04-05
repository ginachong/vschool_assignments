import React from 'react'


export default function UglyThings(props) {
  return (
    <div className="uglyPost">
      <h3>{props.title}</h3>
      <img alt={props.name} src={props.image}></img>
      <p>{props.description}</p>
      <button onClick={(e) => {props.handleDeleteAlert(e, props.index)}}>Delete</button>
      <button>Edit</button>
    </div>
  )
}
