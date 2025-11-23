import {Link} from 'react-router-dom'
import CartBtn from '../buttons/CartBtn'

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid py-2'>
          <button className='navbar-toggler' type='button' data-bs-toggle='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link to='/' className='nav-link active'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/products' className='nav-link'>Products</Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>About</Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link'>Contact</Link>
              </li>
            </ul>
            <CartBtn/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header