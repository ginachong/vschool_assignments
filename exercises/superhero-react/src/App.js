import React, { Component } from 'react';
import './App.css';
import data from "./data.json"
import Superhero from "./Superhero"

class App extends Component {
  constructor(){
    super()
    this.state={
      superheroes: data
    }
  }

handleClick = (id) => {
  this.setState(prevState => {
    let newArray = prevState.superheroes.map((item, index)=>{
      if(index === id)
        alert(prevState.superheroes[index].catchPhrase)
      return item
    })
    return {superheroes: newArray}
  })
}

  render(){
    const superheroArray = this.state.superheroes.map((item, index)=>{
      return <Superhero key={index+item.name} id={index} handleClick={this.handleClick} item={item}/>
    })

    return(
      <div>
        {superheroArray}
      </div>
    )
  }
}

export default App;
