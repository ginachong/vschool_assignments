import React, { Component } from 'react'
import axios from "axios"
import {Provider, Consumer} from "./index"

export default class AnimalProvider extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            displayFact: "",
            factCounter: 0,
        }
    }

componentDidMount(){
    axios.get("https://vschool-cors.herokuapp.com?url=https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100").then(response => {
        return this.setState({data: response.data})
    })
}

newFact = (e) => {
    e.preventDefault()
    this.setState(ps => {
        return(
            {factCounter: ps.factCounter + 1}
        )
    })
    let num = Math.floor(Math.random() * 100)
    if(this.state.data.length > 1){
        return this.setState({displayFact: this.state.data[num].text})
    }
}

handleFactCounter = () => {
    
}

  render() {
    
    const value = {
        ...this.state,
        newFact: this.newFact,
    }

    return (
    <Provider value={value}>
        {this.props.children}
    </Provider>
    )
  }
}

export const withData = Container => props => (
    <Consumer>
        {value => <Container {...value}{...props} />}
    </Consumer>
)
