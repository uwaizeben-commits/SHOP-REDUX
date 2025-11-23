import React from 'react'
import {Link} from 'react-router-dom'
import {delItem} from '../../redux/actions/index'
import {useDispatch, useSelector} from 'react-redux'

const Cart = () => {
  const state = useSelector((state) => state.addItem)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delItem(item))
  }

  const CartItems = () => {
    return(
      <>
        {state.map((cartItem) => (
          <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
            <div className="container py-4">
          <button className='btn-close float-end' aria-label='close' onClick={() => handleClose(cartItem)}></button>
          <div className='row justify-content-center'>
            <div className='col-md-4'>
              <img src={cartItem.image} alt={cartItem.title} height={200} width={180} />
            </div>

            <div className='col-md-4'>
              <h3>{cartItem.title}</h3>
              <p className='fw-bold'>{cartItem.price}</p>
            </div>
          </div>
        </div>
          </div>
        ))}
      </>
    )
  }

  const EmptyCart = () => {
    return(
      <div className='px-4 my-5 bg-light rounded-3 py-5'>
        <div className='container py-4'>
          <div className='row'>
            <h3> Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    )
  }

  const CheckoutButton = () => {
    return(
      <div className='container text-center'>
        <Link to= '/checkout' className= 'btn btn-outline-primary mb-5 w-25 mx-auto'>
          Proceed to Checkout
        </Link>
      </div>
    )
  }

  return (
    <>
      {state.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartItems />
          <CheckoutButton />
        </>
      )}
    </>
  )
}

export default Cart