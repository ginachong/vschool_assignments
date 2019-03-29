import React from "react"
import Badge from "./Badge"


class Form extends React.Component{
    constructor(){
      super()
      this.state={
        fName: "",
        lName: "",
        birthPlace: "",
        email: "",
        phone: "",
        favFood: "",
        description: "",
        badgeArray: []
      }
    }
  
    //method for updating state info (name, birth, email, phone, food) onChange

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]  //----> understand the bracket syntax
        })
    }


  //method for adding new info into state array when submit is clicked

    handleClick = (e, newData) => {
        e.preventDefault()
        this.setState(prevState => {
            return {badgeArray: [newData, ...prevState.badgeArray]}
        })
    }
  
    render(){
        let data = {
            fName: this.state.fName, 
            lName: this.state.lName, 
            birthPlace: this.state.birthPlace, 
            email: this.state.email, 
            phone: this.state.phone, 
            favFood: this.state.favFood, 
            description: this.state.description}

        //new array = map of badges creating a new badge for each array item

            let mappedBadges = this.state.badgeArray.map((item, index) => {
                return <Badge key={index} item={item} />
            }) 

        return(
            <div className="container">
                <form>
                    <div className="inputBoxes">
                        <input size="45" type="text" placeholder="First Name" name="fName" value={this.state.fName} onChange={this.handleChange}></input>
                        <input size="45" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                        <input size="45" type="text" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
                        <input size="45" type="text" placeholder="Last Name" name="lName" value={this.state.lName} onChange={this.handleChange}></input>
                        <input size="45" type="text" placeholder="Place of Birth" name="birthPlace" value={this.state.birthPlace} onChange={this.handleChange}></input>
                        <input size="45" type="text" placeholder="Favorite Food" name="favFood" value={this.state.favFood} onChange={this.handleChange}></input>
                    </div>
                    <div className="textAndButton">
                        <textarea rows="10" cols="95" className="textBox" placeholder="Tell us about yourself" name="description" value={this.state.description} onChange={(e) => {this.handleChange(e)}}></textarea>
                        <button onClick={(e) => {this.handleClick(e, data)}}>Submit</button>
                    </div>
                </form>
                <div className="badgeContainer">
                    {mappedBadges}
                </div>
            </div>
        )
        }
  }

  export default Form