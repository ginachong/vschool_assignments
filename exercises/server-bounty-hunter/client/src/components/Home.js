import React, { Component } from 'react'
import Bounty from "./Bounty"
import { withProvider } from '../DBProvider';

class Home extends Component {

componentDidMount(){
  this.props.getBounties()
}

  render() {
    const mappedBounties = this.props.bounties.map((bounty) => <Bounty {...bounty} key={bounty._id}/>)
      return(
        <div>
          {mappedBounties}
        </div>
      )
  }
}

export default withProvider(Home)


//Will need to use Routers
    //Pages:
    //--main page with: bounties >> get bounties on component did mount
      //-put the get inside of a function in the provider and do didMount on component
    //--post page with: input form (required fields)
    //--put page with: input form (non-required fields)
    //STATIC ELEMENTS: 
    //--nav with links to pages (if time: try Nate's presentation)

//get - show the data -------> one button // loops to show all bounties
    //will need a new Component formatting each bounty object (incl. delete button & edit button)
    //could this possibly be done on page refresh instead of using a button?
//post - add a bounty -------> form with input elements for each section
    //include requirement to fill all input boxes
//delete - delete a bounty --> add a delete button to each bounty
//put - edit a bounty -------> edit button on each bounty that opens new window
    //same form as POST but can leave input boxes empty
    //will this need a new page?


//extra time:
    //add images
    //snazzy nav bar

//if I have two forms do I need two providers?
  //-not necessarily, but if we do want to do that:
  //-I think we can just wrap the second one around the component that needs it
  //-and the main one around everything