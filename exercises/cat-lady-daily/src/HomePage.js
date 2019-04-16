import React from 'react'

export default function HomePage() {
  return (
    <div className="homePage">
            <div className="homeBanner">
                <img src="https://amazingpict.com/wp-content/uploads/2015/06/cute-black-white-cat-in-high-resolution.jpg"></img>
                <div className="bannerOverlay"></div>
                <h1>Cat Lady Daily</h1>
            </div>
            <div  className="homeText">
                <p>Totally legit fact: cat ladies (or gents) are 1000% happier than the average human.</p>
                <hr/>
                <p>Cat Lady Daily's purpose is to raise your happiness level through tabby trivia and purrfect photos.</p>
                <hr/>
                <p className="p3">Click through the daily feline facts, choose your favorite cute captures, and watch the side bar as it displays your happiness slowly rising to cat lady nirvana.<span><img alt="arrow" src="https://images.vexels.com/media/users/3/150936/isolated/preview/73014b10f3ddce8f87903227d112deeb-curved-arrow-stroke-doodle-by-vexels.png"></img></span></p>
            </div>
    </div>
  )
}

