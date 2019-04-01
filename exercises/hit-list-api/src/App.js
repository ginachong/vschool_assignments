import React from 'react';
import './App.css';
import axios from 'axios';
import ListItem from "./ListItem"
import Header from "./Header"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      hitList: []
    }
  }

  componentDidMount(){
    axios.get("https://vschool-cors.herokuapp.com?url=https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
      this.setState({hitList: response.data})
    })
  }


  render(){

    let mappedItems = this.state.hitList.map((item,index) => <ListItem key={index + item.name} item={item} />)

    return(
      <div>
        <Header />
        {mappedItems}
      </div>
    )
  }
}

export default App;
