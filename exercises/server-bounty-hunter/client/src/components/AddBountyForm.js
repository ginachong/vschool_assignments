import React, { Component } from 'react'
import { withProvider } from '../DBProvider';

class BountyForm extends Component {
    constructor(){
        super()
        this.state(

        )
    }



  render() {
    return (
      <div>
        <form>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
        </form>
      </div>
    )
  }
}

export default withProvider(BountyForm)


