import React from 'react'
import AddBountyForm from "./components/AddBountyForm"
import Home from "./components/Home"
import { Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/"         render={(rProps) => <Home {...rProps}/>}/>
        {/* <Route path="/addbountyform"  render={(rProps) => <AddBountyForm {...rProps}/>}/> */}
        {/* <Route path="/editform"   render={(rProps) => <EditBountyForm {...rProps}/>}/> */}
      </Switch>
    </div>
  )
}

//To Do:

// -do i need a provider?
  // --no
// -keep state in form 

