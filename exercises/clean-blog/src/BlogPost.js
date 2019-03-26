import React from "react"

function BlogPost(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            <p>Posted by {props.author}</p>
            <p>on {props.date}</p>
        </div>
    )
}


export default BlogPost