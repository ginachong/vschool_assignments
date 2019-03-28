import React from "react"
import List from "./List"

class NameForm extends React.Component{
    constructor(){
        super()
        this.state={
            name: "",
            entryArray: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEntries = (newEntry) => {
        this.setState(prevState => {
            prevState.entryArray.push(newEntry)
            return prevState.entryArray
        })
    }

    render(){

        //map over entries, create entryArray with <List />

        let newEntryArray = this.state.entryArray.map((item, index)=>{
            return <List key={index} entry={item}/>
        })

        return(
            <form>
                <label>Name:
                    <input onChange={this.handleChange} value={this.state.name} name="name"></input>
                </label>
                    <h1>{this.state.name}</h1>
                    <button id={this.state.name} onClick={this.handleEntries}>Submit</button>
                    <ol>{newEntryArray}</ol>
            </form>
        )
    }
}

export default NameForm