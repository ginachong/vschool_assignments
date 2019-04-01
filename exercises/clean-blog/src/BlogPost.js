import React from "react"


function BlogPost(props) {
    return (
        <div className="blogPost">
            <h1>{props.blogPost.title}</h1>
            <h4>{props.blogPost.subtitle}</h4>
            <p>Posted by {props.blogPost.author}</p>
            <p> on {props.blogPost.date}</p>
            <hr/>
        </div>
    )
}

export default BlogPost