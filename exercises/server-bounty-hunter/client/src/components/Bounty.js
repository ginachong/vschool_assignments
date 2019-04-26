import React from 'react'

export default function Bounty(props) {
 const { firstName, lastName, living, bountyAmount, type } = props

  return (
    <div>
      <h1>{firstName + " " + lastName}</h1>
      <p>{type}</p>
      <p>Living: {living === true ? "yes" : "no"}</p>
      <p>${bountyAmount}</p>
    </div>
  )
}
