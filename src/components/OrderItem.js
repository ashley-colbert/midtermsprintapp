import React from 'react'

function OrderItem({item}) {
  return (
    <>
    <form className="orderItem">
      <lable>
      <input className="check" type="checkbox"></input>
      <span>{item}</span>
      </lable>
      <span>
      <input className="qty"type="text"></input>
      <span className="right">Qty</span></span>
    </form>
    </>
  )
}

export default OrderItem