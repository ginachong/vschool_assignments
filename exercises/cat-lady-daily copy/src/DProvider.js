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
            width: 200,
            height: 300,
            backgroundColor: "none",
            recycle: false,
            gameBoard:[1,2,3,4,5,6,7,8,9],
            
        }
    }

componentDidMount(){
    axios.get("https://vschool-cors.herokuapp.com?url=https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100").then(response => {
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

    if(this.state.counter > 29){
        this.setState({recycle: true})
    } else{
        this.setState({recycle: false})
    }
}

photoButton = (e) => {
    e.preventDefault()
    this.setState(ps => {
        return(
            {counter: ps.counter + 1}
        )
    })
    this.handleFactCounter()
    let num = Math.floor(Math.random() * 7) + 1
    return this.setState(
        {width: num * 100}
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
    this.handleFactCounter()
}

handleScroll = () => {
    this.setState({backgroundColor: "gray"})
} //-----> where do I set this???


handleGameClick = (e) => {
    e.preventDefault()
    const array = this.state.gameBoard

    for(let i = 0; i < 9; i++){
        //
        if(e.target.id === array[i] && !checkGameBoard(e.target.id))
            this.setState({[e.target.id]: "visible"})
    } this.opponentMove()
}

checkGameBoard = (positionIndex) => {
    this.state.gameBoard[positionIndex] ? true : false
}


//create random number 1-9
//check cat move
//if cat is not visible, dog === visible
opponentMove = () => {
    let num = Math.floor(Math.random() * 9) +1
    let correspondingCat = "this.state.cat" + num
    console.log(correspondingCat)
    if(correspondingCat !== "visible"){
        return this.setState({["dog" + num]: "visible"})
    }
    else
        this.opponentMove()
}

//if 
//
checkCatMove = () => {

}

checkWin = () => {

}

//create empty cat array and dog array, loop through objects and add relevant items.

playAgain = (e) => {
    e.preventDefault()
    const array = Object.keys(this.state)
    for(let i = 0; i < array.length; i++){
            this.setState({[array[i]]: "visible"})
    }
}

  render() {
    
    const value = {
        ...this.state,
        newFact: this.newFact,
        photoButton: this.photoButton,
        resetButton: this.resetButton,
        handleScroll: this.handleScroll,
        handleGameClick: this.handleGameClick,
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

// NOTES:
// -handleGameClick wasn't working because doBox was covering catBox.
// I had to set catBox to z-index 1 so that it was the element being clicked.
