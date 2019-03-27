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
            url: "src/cartoon-birds-2_daniel-simion.wav",
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

    play = () => {
        this.setState((prevState) => {
            prevState.url.play()
        })
    }

    handleClickPurple = () => {
        this.play();
        this.setState(prevState => {
            return{
                color: ["purple", "purple", prevState.color[2], prevState.color[3]]
            }
        })
    }
    

    handleBlueLeft = () => {
        this.play();
        this.setState(prevState => {
            return{
                color: [prevState.color[0], prevState.color[1], "blue", prevState.color[3]]
            }
        })
    }

    handleBlueRight = () => {
        this.play();
        this.setState(prevState => {
            return{
                color: [prevState.color[0], prevState.color[1], prevState.color[2], "blue"]
            }
        })
    }

    handleReset = (index) => {
        this.play();
        this.setState(prevState => {
                if(prevState.color[index] !== "white")
                    prevState.color[index] = "white"
                return prevState.color[index]
        })
    }


    render(){
        return(

                <div style={containerStyle}>
                    {/* <audio id="audio" src={this.state.url}></audio> */}
                    <Square soundEffect={this.play} handler={this.handleReset} id="0" color={this.state.color[0]} />
                    <Square soundEffect={this.play} handler={this.handleReset} id="1" color={this.state.color[1]} />
                    <Square soundEffect={this.play} handler={this.handleReset} id="2" color={this.state.color[2]} />
                    <Square soundEffect={this.play} handler={this.handleReset} id="3" color={this.state.color[3]} />
                    <button onClick={this.handleClick}>Swap Colors</button>
                    <button onClick={this.handleClickPurple}>Purple</button>
                    <button onClick={this.handleBlueLeft}>Blue</button>
                    <button onClick={this.handleBlueRight}>Blue</button>
                
                </div>
        )
    }
}


export default DJGrid