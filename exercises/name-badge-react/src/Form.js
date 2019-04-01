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
        badgeArray: [],
        disabled: true,
        color: "purple"
      }
    //   this.checkNumber = this.checkNumber.bind(this)
    }
  
    //method for updating state info (name, birth, email, phone, food) onChange

    handleChange = (e, newData) => {
        this.setState({
            [e.target.name]: e.target.value  //----> understand the bracket syntax
        })
        const values = Object.values(newData)
        for(let i = 0; i < values.length; i++){
            if(values[i].length < 3){
                this.setState({disabled: true})
            }
        } 
        this.setState({disabled: false})
    }


  //method for adding new info into state array when submit is clicked

    handleClick = (e, newData) => {
        e.preventDefault()
        this.checkNumber() //----> return out so the function ends ---> add more checks for all boxes
        const values = Object.values(newData)
        for(let i = 0; i < values.length; i++){
            if(values[i].length < 3){
                return alert("All input must be 3 or more characters")
            }
        }
        this.badgeColor()
        this.setState(prevState => {
            return {badgeArray: [newData, ...prevState.badgeArray],  //----> by putting this return OUTSIDE of the if statement and for loop,
                    }                                                     //    the for loop will run over every item in values to make sure each value
    })                                                                  //   is > 3 characters. If any of them ARE under 3, the return breaks you out of
                                                                        //   the function. BUT if all of them are over 3, then you will complete the for
                                                                        //   loop and reach the final return, which updates state.
    }

    checkNumber = () => {
        if(isNaN(this.state.phone)){
            alert("Please enter your phone number with numbers only (eg: 5558885678)")
            return this.setState({disabled: true})
        }
    }

    badgeColor = () => {
        if(this.state.color === "purple")
            this.setState({color: "pink"})
        else if(this.state.color === "pink")
            this.setState({color: "yellow"})
        else if(this.state.color === "yellow")
            this.setState({color: "lightblue"})
        else
            this.setState({color: "purple"})
    }

  
    render(){
        let data = {
            fName: this.state.fName, 
            lName: this.state.lName, 
            birthPlace: this.state.birthPlace, 
            email: this.state.email, 
            phone: this.state.phone, 
            favFood: this.state.favFood, 
            description: this.state.description,
            color: this.state.color,
        }

        //new array = map of badges creating a new badge for each array item

            let mappedBadges = this.state.badgeArray.map((item, index) => {
                return <Badge key={index} item={item} />
            }) 

        return(
            <div className="container">
                <form>
                    <div className="inputBoxes">
                        <input size="45" type="text" placeholder="First Name" name="fName" value={this.state.fName} onChange={(e) => {this.handleChange(e, data)}}></input>
                        <input size="45" type="text" placeholder="Email" name="email" value={this.state.email} onChange={(e) => {this.handleChange(e, data)}}></input>
                        <input size="45" type="text" placeholder="Phone" name="phone" value={this.state.phone} onChange={(e) => {this.handleChange(e, data)}}></input>
                        <input size="45" type="text" placeholder="Last Name" name="lName" value={this.state.lName} onChange={(e) => {this.handleChange(e, data)}}></input>
                        <input size="45" type="text" placeholder="Place of Birth" name="birthPlace" value={this.state.birthPlace} onChange={(e) => {this.handleChange(e, data)}}></input>
                        <input size="45" type="text" placeholder="Favorite Food" name="favFood" value={this.state.favFood} onChange={(e) => {this.handleChange(e, data)}}></input>
                    </div>
                    <div className="textAndButton">
                        <textarea rows="10" cols="95" className="textBox" placeholder="Tell us about yourself" name="description" value={this.state.description} onChange={(e) => {this.handleChange(e, data)}}></textarea>
                        <button disabled={this.state.disabled} onClick={(e) => {this.handleClick(e, data)}}>Submit</button>
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