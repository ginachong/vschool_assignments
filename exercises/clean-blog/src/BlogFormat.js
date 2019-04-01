import React from "react"
import blogData from "./blogData"
import BlogPost from "./BlogPost"

function BlogFormat() {

    let blogArray = blogData.map(item => {
        return <BlogPost blogPost={item} />
    })

    return(
        <div className="blogList">
            {blogArray}
            <div className="olderPosts">
                <p>Older Posts</p>
                <img className="arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAclBMVEX///8AAABUVFSHh4ePj4/CwsJCQkI4ODje3t4EBAQSEhIJCQn19fXu7u4WFhaamprW1tYuLi5ISEhubm65ubmBgYHKysocHBylpaXm5uYkJCRfX1+xsbHQ0NB2dnZkZGSUlJQyMjJPT09GRkZ7e3uioqIgOJjDAAACKklEQVR4nO3Z204CMRRA0VMugjAgoAiogKL+/y/qTDujDvBg20x7kr1eSUx38GgvIgAAAAAAAAAAAAAAAAAAAAAAAAAAxLEuUq8gErPZpl5CHMaY0WPqRcRgSs+71MsIV4WYaV/9qBjn6SX1SgKZxs0+9VqClMPen9iU4yz1agKUX4XsjrZkMki9HH9ViMj+RvuouBCR7camvC8Sr8hTEyLFelqV3N6rHJWfEJHdsxuV14QL8vU7RORxZFOWD+lW5OlviMinG5WTtlFph0jx4UbloGtUzkJExj37pczvQn/4dtCdCyEiwzc3KsOwkJHp1HmIyN3cftYbKw+R2eG2+nB6CNjg5xDyPSon+/H8Myjk0O/M1UP7w9KmvPmOShkS9LsZzavb4HuOSj4hMrt3o+J1bZRRiMji3X4pPtdGWYWIvDzZlP9fG2UWImP3T2Xy31N9XiEB55SsQkJOjhmF1AcUv7N8NiHNkXHgt08pQ1a9zqyvLKPo2+EwR9+r4Tz2WvVf3YAbyBxColx0pQ+ZuavHwFv6/bA7F0MGbq+o6d3kQoj/liSls5DFymZoe1tshYRt21P6G9IcpBQNh/M7JPhom9JPSH3ZsPG/bEipDinq658PbcPhuJA4F3IpVSH1FanK4XC+l7+MdmmdUrPj0vaM0FZ3nNQOh2MzFD61tZUZKh8/29Q+R7eZlbZXzyv0DwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxPEFY3IaCae0bI4AAAAASUVORK5CYII="></img>
            </div>
        </div>
    )
}


export default BlogFormat