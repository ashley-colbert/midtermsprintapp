import React from 'react'

function Button() {
  return (
    <button className="submitButton" type="submit" onClick={function handleClick() {
    alert("Your order has been recieved! Thank you for visiting Gary Blue's Diner");
  }}>Submit</button>
  )
}

export default Button