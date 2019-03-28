import React from "react"

function List(props){
    return(
        <div>
            <li>{()=>{props.entry(props.id)}}</li>
        </div>
    )
}


export default List