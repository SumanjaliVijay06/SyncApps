import React from 'react'
import Header from './Header'
import Footer from './Footer'
import farmLand from './Images/farm_land.jpg'

const Home = () => {
  return (
    <div>
      <Header/>
      
        <div className='farm-lands'>
        <div className='top-container-content'>
          <h6>Home > Property Listings > Farmlands</h6>
          <h1>Find Your Dream Farmland</h1>
          <p>
            Discover the ideal farmland for your agricultural needs with our comprehensive listings and advan
            ced search filters
          </p>
          </div>
        <div className='image-container'>
          <img src={farmLand} alt='land-image' className='farm-land-image'/>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
