import React from "react"


let style={
    maxHeight: "300px",
}

function Superhero(props){
    return(
        <div>
            <img alt={props.item.name} style={style} onClick={()=>{props.handleClick(props.id)}} src={props.item.imageName}></img>
            <h1 onClick={()=>{props.handleClick(props.id)}}>{props.item.name}</h1>
            <h4>{props.item.show}</h4>
        </div>
    )
}

export default Superhero