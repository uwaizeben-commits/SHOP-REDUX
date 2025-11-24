import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import Data from '../../Data'
import { useDispatch } from 'react-redux';
import {addCart, delCart} from '../../redux/actions';

const ProductDetails = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const {id} = useParams()
  const product = Data.filter(x=>x.id == id)[0];
  const products = proDetails[0]
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if(cartBtn === "Add to Cart"){
      dispatch(addCart(product))
      setCartBtn("Remove from Cart")
    }
    else{
      dispatch(delCart(product))
      setCartBtn("Add to Cart")
    }
  }

  if (!product) {
    return (
      <div className='container py-5 my-5 text-center'>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className='container py-5 my-5'>
      <div className='row'>
        <div className='col-md-6 d-flex justify-content-center mx-auto'>
          <img src={product.image} alt={product.title} className="img-fluid" style={{maxHeight: "400px"}}/>
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-center'>
          <h1>{product.title}</h1>
          <hr />
          <h2 className='my-4'>${product.price}</h2>
          <p className='lead'>{product.description}</p>
          <button onClick={() => handleCart(product)} className='btn btn-outline-primary my-2'>{cartBtn}</button>
          <button className='btn btn-primary my-2'>Go to Cart</button>
        </div>
      </div>
    </div>
  )


}

export default ProductDetails;
