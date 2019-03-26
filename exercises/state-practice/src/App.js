import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      counter: 0,
    }
  }

handleClickAdd = () => {
  this.setState(prevState => {
    return(
      {counter: prevState.counter + 1}
    )
  })
}

handleClickSubtract = () => {
    this.setState(prevState => {
      return(
      {counter: prevState.counter -1}
    )}
  )
}

render(){
  return(
    <div>
        <button onClick={this.handleClickSubtract}>Count Down</button>
        {this.state.counter}
        <button onClick={this.handleClickAdd}>Count Up</button>
    </div>
  )
}

}

export default App;
