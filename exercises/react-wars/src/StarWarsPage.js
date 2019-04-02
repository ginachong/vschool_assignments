import React from "react"
import axios from "axios"
import {Link, Switch, Router} from "react-router-dom"


class StarWarsPage extends React.Component{
    constructor(){
        super()
        this.state = {
            characters: []
        }
    }

    componentDidMount(){
        axios.get("https://swapi.co/api/people/").then(response => {
            // console.log(response.data.results)
            this.setState({characters: response.data.results})
        })
    }


    render(){

        let nameStyle = {
            display: "block",
            paddingLeft: "10px",
            padding: "15px",
        }

        let style = {
            border: "solid",
            borderWidth: "thin",
            height: "100%",
            width: "200px",
            padding: "10px",
        }

        let mappedCharacters = this.state.characters.map(item => <Link style={nameStyle}key={item.name + item.height} to={`/${item.name}`}>{item.name}</Link>)
        let mappedRouters = this.state.characters.map((item, index) => <Router key={item.name + item.birth_year} path={`https://swapi.co/api/people/${index + 1}`} component={item.name} />)

        return(
            <div style={style}>
                {mappedCharacters}
                <Switch>
                    <Router exact path="/" component={Home} />
                    {mappedRouters}
                </Switch>
            </div>
        )
    }
}


export default StarWarsPage