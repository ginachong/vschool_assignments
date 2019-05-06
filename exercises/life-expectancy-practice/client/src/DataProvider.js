import React, { Component, createContext } from 'react'
import axios from 'axios'
const {Consumer, Provider} = createContext()

export default class DataProvider extends Component {
    constructor(){
        super()
        this.state = {
            userData: [],
            yesNoButtons: "",
            drinkButtons: "",
            exerciseHours: "",
            exerciseIntensity: "",
            // METER
            progress: 0,
            limit: 100,
            personalScore: 78,
            currentUser: {  doesSmoke: false, 
                            drink: "0-5", 
                            exerciseIntensity: "0 Hours Per Week"
                         }
        }
        this.intervalID = null
    }

    componentDidMount() {
        // save the id to our class's constructor
        this.intervalID = setInterval(this.incProgress, 60)
    }

    incProgress = () => {
        if(this.state.progress <= this.state.personalScore) {
            this.setState(prevState => ({ progress: prevState.progress + 1}))
        } else {
            clearInterval(this.intervalID)
        }
    }

    getAvg = () => {
        axios.get('/users').then(res => {
          this.setState({userData: res.data})
        })
    }
    
    postUser = () => {
        axios.post('/users').then(res => {
          console.log("post successful")
        })
    }   

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    addNewUser = newUser => {
        axios.post('/users', newUser).then(res => {
        console.log(res.data)
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.addNewUser(this.state.currentUser)
        // window.open('/useraverage')
}

  render() {
    return (
      <Provider value={{
          ...this.state,
          getAvg: this.getAvg,
          handleChange: this.handleChange,
          postUser: this.postUser,
          handleSubmit: this.handleSubmit,
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export const withDataProvider = C => props => {
    return(
        <Consumer>
            {value => <C {...value}{...props} />}
        </Consumer>
    )
}
