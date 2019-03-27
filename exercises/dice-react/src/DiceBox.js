import React from "react"
import Die from "./Die"

class DiceBox extends React.Component{
    constructor(){
        super()
        this.state={
            die1: 1, 
            die2: 2,
            die3: 3,
            die4: 4,
            die5: 5,
        }
    }

handleClick = () => {
    this.setState({
        die1: Math.floor(Math.random() * 7),
        die2: Math.floor(Math.random() * 7),
        die3: Math.floor(Math.random() * 7),
        die4: Math.floor(Math.random() * 7),
        die5: Math.floor(Math.random() * 7),
    })
}

// handleChecked = () => {
//     this.setState(prevState => {
//         return prevState.id.isChecked = !prevState.id.isChecked
//     })
// }

    render(){
        return(
            <div>
                <Die num={this.state.die1}/>
                <Die num={this.state.die2} />
                <Die num={this.state.die3} />
                <Die num={this.state.die4} />
                <Die num={this.state.die5} />
                <button onClick={this.handleClick}>Roll Dice</button>
            </div>
        )
    }
}


export default DiceBox