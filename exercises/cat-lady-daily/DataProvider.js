import React, { Component } from 'react'
import axios from "axios"
import {Provider, Consumer} from "./index"


export default class AnimalProvider extends Component {
    constructor(){
        super()
        this.state = {
            factData: [],
            photoData: [],
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
            height: 200,
            width: 300,
            backgroundColor: "none",
        }
    }

componentDidMount(){
    axios.get("https://vschool-cors.herokuapp.com?url=https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100").then(response => {
        // axios.get("https://cataas.com/cat").then(response => {
        //     console.log(response.data)
        //     return this.setState({photoData: response.data})
        // })
        return this.setState({factData: response.data})
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
    if(this.state.factData.length > 1){
        return this.setState({displayFact: this.state.factData[num].text})
    }
}

handleFactCounter = () => {
    this.state.counter > 2 && this.setState({color1: "#FAE3E3"})
    this.state.counter > 5 && this.setState({color2: "#FAE3E3"})
    this.state.counter > 8 && this.setState({color3: "#FAB3A9"})
    this.state.counter > 11 && this.setState({color4: "#FAB3A9"})
    this.state.counter > 14 && this.setState({color5: "#CF8BA9"})
    this.state.counter > 17 && this.setState({color6: "#CF8BA9"})
    this.state.counter > 20 && this.setState({color7: "#E06C9F"})
    this.state.counter > 23 && this.setState({color8: "#E06C9F"})
    this.state.counter > 26 && this.setState({color9: "#F92A82"})
    this.state.counter > 29 && this.setState({color10: "#F92A82"})
}

photoButton = (e) => {
    e.preventDefault()
    this.setState(ps => {
        return(
            {counter: ps.counter + 1}
        )
    })
    this.handleFactCounter()
    let num1 = Math.floor(Math.random() * 7) + 1
    let num2 = Math.floor(Math.random() * 7) + 1
    console.log(num1, num2)
    return this.setState(
        {height: num1 * 100,
        width: num2 * 100}
    )
}

resetButton = (e) => {
    e.preventDefault()
    this.setState({
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
    })
}

handleScroll = () => {
    this.setState({backgroundColor: "gray"})
} //-----> where do I set this???

  render() {
    
    const value = {
        ...this.state,
        newFact: this.newFact,
        photoButton: this.photoButton,
        resetButton: this.resetButton,
        handleScroll: this.handleScroll,
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
