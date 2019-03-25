import React from "react"


function Pet(props){
    return (
        <div>
            <p><b>Pet Name: </b>{props.pet.name}</p>
            <p><b>Breed: </b>{props.pet.breed}</p>
            <hr/>
        </div>
    )
}


export default Pet