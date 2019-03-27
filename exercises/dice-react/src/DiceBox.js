import React from "react"
import Die from "./Die"

class DiceBox extends React.Component{
    constructor(){
        super()
        this.state={
            die1: Math.floor(Math.random() * 6), //+1?
            die2: Math.floor(Math.random() * 6),
            die3: Math.floor(Math.random() * 6),
            die4: Math.floor(Math.random() * 6),
            die5: Math.floor(Math.random() * 6),
        }
    }

handleClick = () => {
    return this.setState(prevState => {
        prevState = Math.floor(Math.random() * 6)
    })
}

    render(){
        return(
            <div>
                <Die num={this.state.die1}/>
                <Die />
                <Die />
                <Die />
                <Die />
                <button onClick={this.handleClick}>Roll Dice</button>
            </div>
        )
    }
}


export default DiceBox