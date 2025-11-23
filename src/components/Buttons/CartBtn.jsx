import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartBtn = () => {
    const state = useSelector((state) => state.addItem)
  return (
    <div>
      <Link to= '/cart' className= 'btn btn-outline-primary ms-2'>
        <span className= 'fa fa-shopping-cart me-1'></span> cart ({state.length})
      </Link>
    </div>
  )
}

export default CartBtn
