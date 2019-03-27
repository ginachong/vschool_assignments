import React from "react"
import blogData from "./blogData"
import BlogList from "./BlogList"

function BlogFormat() {

    let blogArray = blogData.map(item => {
        return <BlogList blogPost={item} />
    })

    return(
        <div>
            {blogArray}
        </div>
    )
}


export default BlogFormat