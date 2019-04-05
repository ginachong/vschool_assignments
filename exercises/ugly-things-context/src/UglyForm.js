import React from 'react'

function UglyForm(props) {
    
    const newProps = {
        title: props.title,
        image: props.image,
        description: props.description,
    }


  return (
    <form className="form">
        <div className="inputBoxes">
            <input value={props.title} name="title" onChange={e => {props.handleChange(e)}} type="text" placeholder="Title"></input>
            <input value={props.image} name="image" onChange={e => {props.handleChange(e)}} type="text" placeholder="Img URL"></input>
            <input value={props.description} name="description" onChange={e => {props.handleChange(e)}} type="text" placeholder="Description"></input>
        </div>
      <button onClick={(e, newProps) => {props.handleSubmit(e, newProps)}}>Submit</button>
    </form>
  )
}

export default UglyForm
