import React from "react"

class ThemeProvider extends React.Component{
    constructor(){
        super()
        this.state = {
            theme: "light"
        }
    }

    handleClick = () => {
        this.setState(ps => ({theme: ps.theme === "light" ? "dark" : "light"}))
    } //-------> why does there need to be parentheses around this????

    render(){

        const props = {
            handleClick: this.handleClick,
            ...this.state
        }

        return(
            <Provider value={props}>
                {this.props.children} 
            </Provider>
        )
    }

}

//what is this.props.children???

export default ThemeProvider