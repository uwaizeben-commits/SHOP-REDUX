import React from 'react'
import {useParams} from 'react-router-dom'
import Data from '../../Data'

const ProductDetails = () => {
  const {id} = useParams()
  const product = Data.find((item) => item.id == id)

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
        <div className='col-md-6 d-flex justify-content-center mx-auto product-img'>
          <img src={product.image} alt={product.title} height={400} width={300}/>
        </div>
        <div className='col-md-6'>
          <h1>{product.title}</h1>
          <hr />
          <h2 className='my-4'>{product.price}</h2>
          <p className='lead fw-bold'>{product.description}</p>
        </div>
      </div>
    </div>
  )


}

export default ProductDetails;
