import { Link } from 'react-router-dom'
import Data from '../../Data'
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/actions';

const Product = () => {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  const cardItem = (item) => {
    return(
      <div className="card my-3 py-3 col-md-3 col-sm-6" key={item.id} style={{textAlign: 'center'}}>
          <img src={item.image} className='card-img-top' alt={item.title} height={250}/>
          <div className='card-body text-center'>
            <h5 className='card-title'>{item.title}</h5>
            <p className="lead">${item.price}</p>
            <Link to={`/product/${item.id}`} className='btn btn-outline-primary'>View Details</Link>
            <button onClick={()=>addProduct(item)} className='btn btn-primary ms-2'>Add to Cart</button>
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
        <div className='row justify-content-around'>
          {Data.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product