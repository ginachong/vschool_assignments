import React from "react"


function BlogList(props) {
    return (
        <div className="blogPost">
            <h1>{props.blogPost.title}</h1>
            <h4>{props.blogPost.subtitle}</h4>
            <p>Posted by {props.blogPost.author}</p>
            <p> on {props.blogPost.date}</p>
        </div>
    )
}

export default BlogList