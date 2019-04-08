import React from 'react'

export default function HomePage() {
  return (
    <div className="homePage">
            {/* <img alt="white cat" src="https://data.whicdn.com/images/85371248/large.png"></img> */}
            <div className="homeBanner">
                {/* <div className="bannerImg"></div> */}
                <div className="bannerOverlay"></div>
                <h1>Cat Lady Daily</h1>
            </div>
            <div  className="homeText">
                <h4>Totally legit fact: cat ladies (or gents) are 1000% happier than the average human.</h4>
                <p className="p1">Cat Lady Daily's purpose is to raise your happiness level through tabby trivia and purrfest photos.</p>
                <p className="p2">Click through the daily feline facts, choose your favorite cute captures, and watch the side bar as it displays your happiness slowly rising to cat lady nirvana.</p>
            </div>
        
    </div>
  )
}
