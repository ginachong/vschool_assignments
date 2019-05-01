import React, { Component } from 'react'
const axios = require('axios')
const DBContext= React.createContext()

export default class DBProvider extends Component {
    constructor(){
        super()
        this.state = {
            bounties: [],
        }
    }

    getBounties = () => {
        axios.get("/bounties").then(res => {
            console.log(res)
            this.setState({bounties: res.data})
            console.log(this.state.bounties)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }


  render() {
    return (
        <DBContext.Provider value={{
            ...this.state,
            getBounties: this.getBounties,
            }}>
            {this.props.children}
        </DBContext.Provider>
    )
  }
}

export const withProvider = C => props => (
    <DBContext.Consumer>
        {value => <C {...value}{...props}/>}
    </DBContext.Consumer>
)