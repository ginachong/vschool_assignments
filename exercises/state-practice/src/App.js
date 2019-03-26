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
      {counter: prevState.counter + 10}
    )
  })
}

handleClickSubtract = () => {
    this.setState(prevState => {
      return(
      {counter: prevState.counter -10}
    )}
  )
}

handleReset = () => {
  this.setState(
    {counter: 0}
  )}

render(){
  return(
    <div>
        <button onClick={this.handleClickSubtract}>Count Down</button>
        {this.state.counter}
        <button onClick={this.handleClickAdd}>Count Up</button>
        <br/>
        <button onClick={this.handleReset}>Reset</button>
    </div>
  )
}

}

export default App;
