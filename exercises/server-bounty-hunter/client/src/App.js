import React from 'react'
import BountyForm from "./AddBountyForm"

export default function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Home />
        <AddBountyForm />
        <EditBountyForm />
      </Switch>
    </div>
  )
}

//To Do:

// -do i need a provider?
// --no
// -keep state in form 

