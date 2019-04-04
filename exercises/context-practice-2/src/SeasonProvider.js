import React from "react";
import {Provider, Consumer} from "./index"

class SeasonProvider extends React.Component{
    constructor(){
        super()
        this.state = {
            season: "summer",
        }
    }

    handleSeason = (buttonName) => {
        if(buttonName === "winter"){
            this.setState({season: "winter"})
        }
        else if(buttonName === "spring"){
            this.setState({season: "spring"})
        }
        else if(buttonName === "summer"){
            this.setState({season: "summer"})
        }
        else{
            this.setState({season: "fall"})
        }
    }

    render(){

        const stuff = {
            ...this.state,
            handleSeason: this.handleSeason,
        }

        return(
            <Provider value={stuff}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withSeasonProvider = Container => props => (
    <Consumer>
        {value => <Container {...value}{...props}/>}
    </Consumer>
)



export default SeasonProvider