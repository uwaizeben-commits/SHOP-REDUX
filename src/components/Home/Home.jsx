import iphone1 from '../../assets/iphone_13-removebg-preview.png'
import iphone2 from '../../assets/iphone_14-removebg-preview.png'
import iphone3 from '../../assets/iphone_15-removebg-preview.png'
import iphone4 from '../../assets/iphone_16-removebg-preview.png'
import Product from '../Product/Product'


const Home = () => {
  return (
    <div>
      <div id='carouselExampleIndicators' class='carousel slide' data-bs-ride='carousel'>
        <div class='carousel-indicators'>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' class='active' aria-current='true' aria-label='Slide 1'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4'></button>
        </div>
        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <img src={iphone1} class='d-block w-100' height={500} alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={iphone2} class='d-block w-100' height={500} alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={iphone3} class='d-block w-100' height={500} alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={iphone4} class='d-block w-100' height={500} alt='...' />
          </div>
        </div>
        <button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button class='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
      <Product />
    </div>
  )
}

export default Home