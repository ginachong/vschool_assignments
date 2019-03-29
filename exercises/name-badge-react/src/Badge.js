import React from "react"

function Badge(props){
    return (
        <div className="badge">
            <div className="badgeHeader">
                <h4>Badge:</h4>
            </div>
            <div className="badgeInfo">
                <ul>
                    <li>Name: {props.item.fName + " " + props.item.lName}</li>
                    <li>Place of Birth: {props.item.birthPlace}</li>
                    <li>Email: {props.item.email}</li>
                    <li>Phone: {props.item.phone}</li>
                    <li>Favorite Food: {props.item.favFood}</li>
                </ul>
            </div>
            <div className="descriptionBox">
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}


export default Badge