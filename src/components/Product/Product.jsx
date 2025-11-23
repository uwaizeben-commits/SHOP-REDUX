import { Link } from 'react-router-dom'
import Data from '../../Data'

const Product = () => {

  const cardItem = (item) => {
    return(
      <div className='col-my-5 py-4' key={item.id} style={{width: '18rem'}}>
          <img src={item.image} className='card-img-top' alt={item.title} height={250}/>
          <div className='card-body'>
            <h5 className='card-title'>{item.title}</h5>
            <p>${item.price}</p>
            <Link to={`/product/${item.id}`} className='btn btn-outline-dark'>Buy Now</Link>
          </div>
      </div>
    )
  }

  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Products</h1>
            <hr/>
          </div>
        </div>
      </div>


      <div className='container'>
        <div className='row justify-content-center'>
          {Data.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product