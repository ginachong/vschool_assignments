import React from "react"
import Square from "./Square"


let containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
}

class DJGrid extends React.Component{
    constructor(){
        super()
        this.state={
            color: ["white", "black", "black", "white"],
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            let colorArray = prevState.color.map((item) => {
                if(item === "black")
                    item = "white"
                else if (item === "white")
                    item = "black"
                return item;
            })
            return {color: colorArray}
        })
    }

    handleClickPurple = () => {
        this.setState(prevState => {
            return{
                color: ["purple", "purple", prevState.color[2], prevState.color[3]]
            }
        })
    }
    

    handleBlueLeft = () => {
        this.setState(prevState => {
            return{
                color: [prevState.color[0], prevState.color[1], "blue", prevState.color[3]]
            }
        })
    }

    handleBlueRight = () => {
        this.setState(prevState => {
            return{
                color: [prevState.color[0], prevState.color[1], prevState.color[2], "blue"]
            }
        })
    }

    render(){
        return(

                <div style={containerStyle}>
                    <Square color={this.state.color[0]} />
                    <Square color={this.state.color[1]} />
                    <Square color={this.state.color[2]} />
                    <Square color={this.state.color[3]} />
                    <button onClick={this.handleClick}>Swap Colors</button>
                    <button onClick={this.handleClickPurple}>Purple</button>
                    <button onClick={this.handleBlueLeft}>Blue</button>
                    <button onClick={this.handleBlueRight}>Blue</button>
                
                </div>
        )
    }
}


export default DJGrid