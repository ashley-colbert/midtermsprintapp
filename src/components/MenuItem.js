import React from 'react'
import PropTypes from "prop-types";



function MenuItem({menu, price}) {
  return (
    <div className="menuItem">{menu}{price}</div>
  )
}

export default MenuItem