import React from 'react';
import './App.css';
import Card from "./Card"


let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]


function App(){

  let vacaysMapped = vacationSpots.map((vacay, i) => {

    let backgroundImg;

    if(vacay.timeToGo === "Spring")
      backgroundImg = "https://cdn.shopify.com/s/files/1/1865/1389/collections/CherryBlossom_2000x.progressive.jpg?v=1497805323";
    else if(vacay.timeToGo === "Summer")
      backgroundImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdcvDcf6hU6DPFF3E1c9m9cyFgYuMnvMdSP42mWfSDtAsVb1kjA";
    else if(vacay.timeToGo === "Winter")
      backgroundImg = "https://thepawprintdaa.files.wordpress.com/2016/12/winter-wonderland.jpg";
    else if(vacay.timeToGo === "Fall")
      backgroundImg = "https://static01.nyt.com/images/2016/10/26/science/26tb-foliage/26tb-foliage-articleLarge.jpg?quality=75&auto=webp&disable=upscale";

    if(vacay.price < 500)
      vacay.price = "$"
    else if(vacay.price < 1000 && vacay.price >= 500)
      vacay.price = "$$"
    else
      vacay.price = "$$$"

    return <Card key={i + vacay.place} backgroundImg={backgroundImg} vacay={vacay} />
  })

    return (
      <div className="container">
        <h1>Vacation Spots</h1>
        {vacaysMapped}
      </div>
    )
}

export default App;
