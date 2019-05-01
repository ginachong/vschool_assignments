import React from 'react'
import { withDataProvider } from './DataProvider';


class UserAvg extends React.Component {

    componentDidMount(){
        this.props.getAvg()
    }

    calculateAvg = (value, total) => {
        return value / total
    }

    getLastUser = (data) => {
      const userIndex = data.length - 1
      return data[userIndex]
    }

    avgData = (data) => {
        let yesCounter = 0
        let noCounter = 0
        let drink0to5 = 0
        let drink5to10 = 0
        let drink10to18 = 0
        let drink18plus = 0
        //---------------------------------------
        data.map(user => {
            let { smoke, drink, exercise } = user

            if(smoke === "yes"){
            yesCounter++
            }
            else{
            noCounter++
            }

            if(drink === "0-5"){
            drink0to5++
            }
            else if(drink === "5-10"){
            drink5to10++
            }
            else if(drink === "10-18"){
            drink10to18++
            }
            else{
            drink18plus++
            }
        })
        //---------------------------------------
        let totalDrinkAvg = drink0to5 + drink5to10 + drink10to18 + drink18plus
        let smokerAvg = this.calculateAvg(yesCounter, (yesCounter + noCounter))
        let nonSmokerAvg = this.calculateAvg(noCounter, (yesCounter + noCounter))
        let drink0to5Avg = this.calculateAvg(drink0to5, totalDrinkAvg)
        let drink5to10Avg = this.calculateAvg(drink5to10, totalDrinkAvg)
        let drink10to18Avg = this.calculateAvg(drink10to18, totalDrinkAvg)
        let drink18plusAvg = this.calculateAvg(drink18plus, totalDrinkAvg)
        let arrayOfAverages = [smokerAvg, nonSmokerAvg, drink0to5Avg, drink5to10Avg, drink10to18Avg, drink18plusAvg]

        return arrayOfAverages
    }


    render(){

      let arrayOfAverages = this.avgData(this.props.userData)
      let smokerAvg = arrayOfAverages[0]
      let nonSmokerAvg = arrayOfAverages[1]
      let drink0to5Avg = arrayOfAverages[2]
      let drink5to10Avg = arrayOfAverages[3]
      let drink10to18Avg = arrayOfAverages[4]
      let drink18plusAvg = arrayOfAverages[5]

      const currentUser = {...this.getLastUser(this.props.userData)}

      const drinker0to5Msg = "By maintaining a low-alcohol lifestyle you are extending your life by as much as 5 years compared to heavy drinkers."
      const drinker5to10Msg = "Consuming more than 5 drinks per week lessens your life expectancy by about 6 months."
      const drinker10to18Msg = "Consuming more than 10 drinks per week lessens your life expectancy by 1-2 years."
      const drinker18plusMsg = "Consuming more than 18 drinks per week lessens your life expectancy by up to 5 years."

        return (
            <div>
                <div className="userResults">
                    <h1>Your Life Expectancy: </h1>
                    {currentUser.smoke === true ? <p>You are a smoker.</p> : <p>You are a non-smoker.</p>}
                    {currentUser.smoke === true ? <p>Smokers can expect to live an average of 10 years less than non-smokers.</p> : <p>Non-smokers can expect to live an average of 10 years longer than smokers.</p>}
                    <p>You consume {currentUser.drink} drinks per week.</p>
                    {currentUser.drink === '0-5' ? <p>{drinker0to5Msg}</p> : currentUser.drink === '5-10' ? <p>{drinker5to10Msg}</p> : currentUser.drink === '10-18' ? <p>{drinker10to18Msg}</p> : <p>{drinker18plusMsg}</p>}
                </div>
                <div className="avgResults">
                    <h1>Average Life Expectancy: </h1>
                    <p>{smokerAvg}% of users are smokers</p>
                    <p>{nonSmokerAvg}% of users are non-smokers</p>
                    <p>{drink0to5Avg}% of users consume 0-5 drinks per week</p>
                    <p>{drink5to10Avg}% of users consume 5-10 drinks per week</p>
                    <p>{drink10to18Avg}% of users consume 10-18 drinks per week</p>
                    <p>{drink18plusAvg}% of users consume 18+ drinks per week</p>
                </div>
            </div>
        )
    }
}

export default withDataProvider(UserAvg)


// handleSubmit = () => {
//     axios.post("/", newUser).then(res => {
//         console.log(res.data)
//     })
//     .catch(err => console.log(err.response.data.errMsg))

//     window.open('/results')
// }

// <button>Compare your results to other users</button>