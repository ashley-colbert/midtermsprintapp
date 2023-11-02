import React from 'react'

function OrderItem({item}) {
  return (
    <>
    <form className="orderItem">
      <input className="check" type="checkbox"></input>
      <span>{item}</span>
      <span>
      <input className="qty"type="text"></input>
      <span className="right">Qty</span></span>
    </form>
    </>
  )
}

export default OrderItem