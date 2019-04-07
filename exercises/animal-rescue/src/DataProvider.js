import React, { Component } from 'react'
import axios from "axios"
import {Provider, Consumer} from "./index"

export default class AnimalProvider extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            displayFact: "",
            counter: 0,
            color1: "white",
            color2: "white",
            color3: "white",
            color4: "white",
            color5: "white",
            color6: "white",
            color7: "white",
            color8: "white",
            color9: "white",
            color10: "white",
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
            {counter: ps.counter + 1}
        )
    })
    this.handleFactCounter()
    let num = Math.floor(Math.random() * 100)
    if(this.state.data.length > 1){
        return this.setState({displayFact: this.state.data[num].text})
    }
}

handleFactCounter = () => {
    this.state.counter > 4 && this.setState({color1: "yellow"})
    this.state.counter > 9 && this.setState({color2: "yellow"})
    this.state.counter > 14 && this.setState({color3: "yellow"})
    this.state.counter > 19 && this.setState({color4: "yellow"})
    this.state.counter > 24 && this.setState({color5: "yellow"})
    this.state.counter > 29 && this.setState({color6: "yellow"})
    this.state.counter > 34 && this.setState({color7: "yellow"})
    this.state.counter > 39 && this.setState({color8: "yellow"})
    this.state.counter > 44 && this.setState({color9: "yellow"})
    this.state.counter > 49 && this.setState({color10: "yellow"})
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
