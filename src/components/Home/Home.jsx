import iphone1 from '../../assets/iphone_13-removebg-preview.png'
import iphone2 from '../../assets/iphone_14-removebg-preview.png'
import iphone3 from '../../assets/iphone_15-removebg-preview.png'
import iphone4 from '../../assets/iphone_16-removebg-preview.png'
import Product from '../Product/Product'


const Home = () => {
  return (
    <div>
      <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4'></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={iphone1} className='d-block w-100' height={500} alt='iPhone 13' />
          </div>
          <div className='carousel-item'>
            <img src={iphone2} className='d-block w-100' height={500} alt='iPhone 14' />
          </div>
          <div className='carousel-item'>
            <img src={iphone3} className='d-block w-100' height={500} alt='iPhone 15' />
          </div>
          <div className='carousel-item'>
            <img src={iphone4} className='d-block w-100' height={500} alt='iPhone 16' />
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      <Product />
    </div>
  )
}

export default Home