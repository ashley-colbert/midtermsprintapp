import React from 'react'
import Button from './Button'

function CCForm() {
  return (
    <form className="ccForm">
      <h2>Customer Information:</h2>
      
      <input  className="topLine" type="text" placeholder="Full Name"></input>
      <input  className="topLine" type="text" placeholder="Address"></input>
      <input className="bottomLine" type="text" placeholder="Credit Card Numer"></input>
      <input className="bottomLineSm" type="text" placeholder="Exp"></input>
      <input className="bottomLineSm" type="text" placeholder="CVV"></input>
      <Button />
    </form>
  )
}

export default CCForm