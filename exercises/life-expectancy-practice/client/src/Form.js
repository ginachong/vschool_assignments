import React from 'react'
import './App.css'
import { withDataProvider } from './DataProvider';

const style = {
    display: "inline"
}

function Form(props) {

    return (
            <form>
                <div className="smokeQ">
                    <label className="label">Do you smoke?</label>
                    <input 
                        name="yesNoButtons" 
                        value="yes"
                        onChange={(e) => props.handleChange(e)} 
                        checked={props.yesNoButtons === "yes"} 
                        type="radio">
                    </input>
                    <label>Yes</label>
                    <input 
                        name="yesNoButtons" 
                        value="no"
                        onChange={(e) => props.handleChange(e)} 
                        checked={props.yesNoButtons === "no"} 
                        type="radio">
                    </input>
                    <label>No</label>
                </div>
                <div className="drinkQ">
                    <label className="label">What is the average of drinks you consume in one week?</label>
                    <input 
                        onChange={(e) => props.handleChange(e)} 
                        checked={props.drinkButtons === "0-5"} 
                        value="0-5"
                        name="drinkButtons"
                        type="radio">
                    </input>
                    <label>0-5</label>
                    <input                             
                        onChange={(e) => props.handleChange(e)} 
                        checked={props.drinkButtons === "5-10"} 
                        value="5-10"
                        name="drinkButtons"
                        type="radio">
                    </input>
                    <label>5-10</label>
                    <input                             
                        onChange={(e) => props.handleChange(e)} 
                        checked={props.drinkButtons === "10-18"} 
                        value="10-18"
                        name="drinkButtons"
                        type="radio">
                    </input>
                    <label>10-18</label>
                    <input                             
                        onChange={(e) => props.handleChange(e)} 
                        checked={props.drinkButtons === "18+"} 
                        value="18+"
                        name="drinkButtons"
                        type="radio">
                    </input>
                    <label>18+</label>
                </div>
                <div className="exerciseQ">
                    <label className="label">How many hours do you exercise per week?</label>
                    <input type="text" size="6" placeholder="e.g. 2.5"></input>
                    <p style={style}> hours of </p>
                    <select>
                        <option value="">Choose One</option>
                        <option value="moderate">moderate</option>
                        <option value="vigorous">vigorous</option>
                    </select>
                    <p style={style}> exercise.</p>
                    <p className="exerciseNote">*moderate = you can speak but cannot sing</p>
                    <p className="exerciseNote">*vigorous = you can only say a few words before needing to take a break</p>
                </div>
            </form>
    )
}


export default withDataProvider(Form)
