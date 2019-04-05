import React, { Component } from 'react'
import {Provider, Consumer} from "./index"

export default class UglyProvider extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            image: "",
            description: "",
            uglyArray: []
        }
    }

handleChange = (e) => {
    this.setState(
        {[e.target.name]: e.target.value}
    )
}

handleSubmit = (e, newProps) => {
    e.preventDefault()
    this.setState(ps => {return {uglyArray: [newProps, ...ps.uglyArray]}})
}

handleDeleteAlert = (e, index) => {
    e.preventDefault()
    let answer = window.confirm("Are you sure you want to delete this?")  //-----> remember window.confirm
    if(answer === true){
        for(let i = 0; i < this.state.uglyArray.length; i++){
            if(index === i){
                this.setState(ps => {
                    ps.uglyArray.splice(1, i)
                    console.log(this.state.uglyArray)
                    
                })
            }    
        } return {...this.state}   
    }
}

  render() {

    const stuff = {
        ...this.state,
        handleSubmit: this.handleSubmit,
        handleChange: this.handleChange,
        handleDeleteAlert: this.handleDeleteAlert
    }

    return (
        <Provider value={stuff}>
            {this.props.children}
        </Provider>
    )
  }
}

export const withUglyProvider = Container => props => (
    <Consumer>
        {value => <Container {...value} {...props} />}
    </Consumer>
)