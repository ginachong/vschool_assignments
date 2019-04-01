import React from 'react';
import './App.css';
import axios from "axios"
import Box from "./Box"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      colorData: []
    }
  }

  componentDidMount(){
    axios.get("http://www.colr.org/json/colors/random/7").then(response => {
      this.setState({colorData: response.data.colors}) 
     console.log(this.state)
    })
  }


  render(){

    let mappedData = this.state.colorData.map(item => <Box key={item.id} item={item} />)

    return(
      <div>
        {mappedData}
      </div>
    )
  }
}

export default App;

//had trouble with this program because it was rendering before state was filled with information from the database
//as well as: had trouble sifting through the object.array.object maze.
//SOLVED BY: doing GET command as: response.data.colors so that that array aligns with my empty array