import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/about'
import Product from './components/Product/Product'
import ProductDetails from './components/Product/ProductDetails'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
