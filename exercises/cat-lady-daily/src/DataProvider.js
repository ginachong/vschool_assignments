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
            counter: 1,
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
            catone: "hidden",
            cattwo: "hidden",
            catthree: "hidden",
            catfour: "hidden",
            catfive: "hidden",
            catsix: "hidden",
            catseven: "hidden",
            cateight: "hidden",
            catnine: "hidden",
            dogone: "hidden",
            dogtwo: "hidden",
            dogthree: "hidden",
            dogfour: "hidden",
            dogfive: "hidden",
            dogsix: "hidden",
            dogseven: "hidden",
            dogeight: "hidden",
            dognine: "hidden",
            one:"unoccupied",
            two: "unoccupied",
            three: "unoccupied",
            four: "unoccupied",
            five: "unoccupied",
            six: "unoccupied",
            seven: "unoccupied",
            eight: "unoccupied",
            nine: "unoccupied",
            message: "",
            catPlaying: false,
        }
    }

componentDidMount(){
    axios.get("https://vschool-cors.herokuapp.com?url=https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100").then(response => {
        return this.setState({factData: response.data})
    })
}

progressCounter = () => {
    this.setState(ps => {
        return({counter: ps.counter + 1})
    })
}

newFact = (e) => {
    e.preventDefault()
    this.progressCounter()
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
    this.progressCounter()
    this.handleFactCounter()
    let num = Math.floor(Math.random() * 7) + 1
    return this.setState(
        {width: num * 100}
    )
}

resetButton = (e) => {
    e.preventDefault()
    this.setState({
        counter: 1,
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

handleGameClick = (e) => {
    e.preventDefault()
    this.progressCounter()
    this.handleFactCounter()

    const array = Object.keys(this.state)
    for(let i = 0; i < array.length; i++){
        if(e.target.id === array[i]){
                this.setState({[e.target.id]: "occupied",
                catPlaying: true,
                ["cat" + e.target.id]: "visible"})
        }
    } 
    setTimeout(this.opponentMove, 300)
    setTimeout(this.checkWin, 300)
}

//create random number 1-9
//check cat move
//if cat is not visible, dog === visible
opponentMove = () => {

    let num = Math.floor(Math.random() * 9) + 1

    const squareArray = [
        this.state.one, 
        this.state.two,  
        this.state.three, 
        this.state.four, 
        this.state.five, 
        this.state.six, 
        this.state.seven, 
        this.state.eight, 
        this.state.nine,]

    const filteredSquareArray = squareArray.filter(item => item === "unoccupied")

    if(filteredSquareArray.length !== 0){
        switch(num){
            case 1:
                if(this.state.one === "unoccupied")
                    this.setState({one: "occupied", dogone: "visible"}) 
                else return this.opponentMove()
                break;
            case 2:
                if(this.state.two === "unoccupied")
                    this.setState({two: "occupied", dogtwo: "visible"}) 
                else return this.opponentMove()
                break;
            case 3:
                if(this.state.three === "unoccupied")
                    this.setState({three: "occupied", dogthree: "visible"}) 
                else return this.opponentMove()
                break;
            case 4:
                if(this.state.four === "unoccupied")
                    this.setState({four: "occupied", dogfour: "visible"}) 
                else return this.opponentMove()
                break;
            case 5:
                if(this.state.five === "unoccupied")
                    this.setState({five: "occupied", dogfive: "visible"}) 
                else return this.opponentMove()
                break;
            case 6:
                if(this.state.six === "unoccupied")
                    this.setState({six: "occupied", dogsix: "visible"}) 
                else return this.opponentMove()
                break;
            case 7:
                if(this.state.seven === "unoccupied")
                    this.setState({seven: "occupied", dogseven: "visible"}) 
                else return this.opponentMove()
                break;
            case 8:
                if(this.state.eight === "unoccupied")
                    this.setState({eight: "occupied", dog8: "visible"}) 
                else return this.opponentMove()
                break;
            case 9:
                if(this.state.nine === "unoccupied")
                    this.setState({nine: "occupied", dognine: "visible"}) 
                else return this.opponentMove()
                break;
            default: 
                {alert("Game Board is full")
                this.playAgain()}
        }
    }
}

checkWin = () => {
    if(this.state.catone === "visible" && this.state.cattwo === "visible" && this.state.catthree === "visible")
        this.setState({message: "WINNER"})
    if(this.state.catone === "visible" && this.state.catfour === "visible" && this.state.catseven === "visible")
        this.setState({message: "WINNER"})
    if(this.state.catone === "visible" && this.state.catfive === "visible" && this.state.catnine === "visible")
        this.setState({message: "WINNER"})
    if(this.state.cattwo === "visible" && this.state.catfive === "visible" && this.state.cateight === "visible")
        this.setState({message: "WINNER"})
    if(this.state.catthree === "visible" && this.state.catsix === "visible" && this.state.catnine === "visible")
        this.setState({message: "WINNER"})
    if(this.state.catfour === "visible" && this.state.catfive === "visible" && this.state.catsix === "visible")
        this.setState({message: "WINNER"})
    if(this.state.catseven === "visible" && this.state.cateight === "visible" && this.state.catnine === "visible")
        this.setState({message: "WINNER"})
    if(this.state.catseven === "visible" && this.state.catfive === "visible" && this.state.catthree === "visible")
        this.setState({message: "WINNER"})
//------------------------------------------------------------------------------------------------------
    if(this.state.dogone === "visible" && this.state.dogtwo === "visible" && this.state.dogthree === "visible")
        this.setState({message: "LOSER"})
    if(this.state.dogone === "visible" && this.state.dogfour === "visible" && this.state.dogseven === "visible")
        this.setState({message: "LOSER"})
    if(this.state.dogone === "visible" && this.state.dogfive === "visible" && this.state.dognine === "visible")
        this.setState({message: "LOSER"})
    if(this.state.dogthree === "visible" && this.state.dogsix === "visible" && this.state.dognine === "visible")
        this.setState({message: "LOSER"})
    if(this.state.dogfour === "visible" && this.state.dogfive === "visible" && this.state.dogsix === "visible")
        this.setState({message: "LOSER"})
    if(this.state.dogseven === "visible" && this.state.dog8 === "visible" && this.state.dognine === "visible")
        this.setState({message: "LOSER"})
    if(this.state.dogtwo === "visible" && this.state.dogfive === "visible" && this.state.dog8 === "visible")
        this.setState({message: "LOSER"})
    if(this.state.dogthree === "visible" && this.state.dogfive === "visible" && this.state.dogseven === "visible")
        this.setState({message: "LOSER"})
}

playAgain = (e) => {

    e.preventDefault()
    this.setState({catPlaying: false})

    const squareArray = [
        "one", 
        "two",  
        "three", 
        "four", 
        "five", 
        "six", 
        "seven", 
        "eight", 
        "nine",]

    const catArray = [
        "catone", 
        "cattwo",  
        "catthree", 
        "catfour", 
        "catfive", 
        "catsix", 
        "catseven", 
        "cateight", 
        "catnine",]

    const dogArray = [
        "dogone", 
        "dogtwo",  
        "dogthree", 
        "dogfour", 
        "dogfive", 
        "dogsix", 
        "dogseven", 
        "dog8", 
        "dognine",]

    for(let i = 0; i < squareArray.length; i++){
            this.setState({[squareArray[i]]: "unoccupied"})
    }

    for(let i = 0; i < catArray.length; i++){
        this.setState({[catArray[i]]: "hidden"})
    }

    for(let i = 0; i < dogArray.length; i++){
        this.setState({[dogArray[i]]: "hidden"})
    }

    this.setState({message: ""})
}

  render() {
    
    const value = {
        ...this.state,
        newFact: this.newFact,
        photoButton: this.photoButton,
        resetButton: this.resetButton,
        handleGameClick: this.handleGameClick,
        playAgain: this.playAgain,
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
//
// - had trouble with dogs still showing up on the same square as cats.
//Realized it's because it was happening before state had a chance to update from
//unoccupied to occupied. Solved by adding a set timeout on the function.
