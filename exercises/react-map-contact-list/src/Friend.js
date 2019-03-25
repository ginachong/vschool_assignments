import React from "react"
import Pet from "./Pet"

let style = {
    border: "solid",
    padding: "20px",
    paddingLeft: "10%",
    fontFamily: "'Merriweather', serif",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: '"nameAge pets" "nameAge pets"',
}

let nameAgeStyle = {
    gridArea: "nameAge",
}

let petStyle = {
    gridArea: "pets"
}


function Friend (props){
    let pets = props.friend.pets;
    let petsMapped = pets.map((pet, i) => {
       return <Pet key={i + pet.name} pet={pet}/>
    })

    return(
        <div style={style}>
            <div style={nameAgeStyle} className="nameAge">
                <h3>{props.friend.name}</h3>
                <p>Age: {props.friend.age}</p>
            </div>
            <div style={petStyle} className="pets">
                {petsMapped}
            </div>
        </div>
    )
}


export default Friend