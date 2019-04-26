import React, { Component } from 'react'
const axios = require('axios')
const Consumer = React.createContext

export default class DBProvider extends Component {
    constructor(){
        super()
        this.state = {
            bounties: [],
        }
    }

    getBounties = () => {
        axios.get("/bounties").then(res => {
            this.setState({bounties: res.data})
            console.log(this.state.bounties)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }


  render() {
    return (
        <DBProvider value={{
            ...this.state,
            getBounties: this.getBounties,
            }}>
            {this.props.children}
        </DBProvider>
    )
  }
}

export const withProvider = C => props => (
    <Consumer>
        {value => <C {...value}{...props}/>}
    </Consumer>
)