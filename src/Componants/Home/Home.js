import React from 'react'
import Hero from './Hero/Hero'
import Featured from '../pages/Featured/Featured'
import NewArrivals from '../pages/NewArrivals/NewArrivals'
import Testimonial from '../pages/Testimonial/Testimonial'
import ShopByCategory from '../pages/ShopByCategory/ShopByCategory'

function Home() {
  return (
    <div className='flex justify-center'>
        <div className='w-full'>
          <Hero/>
          <ShopByCategory/>
          <Featured/>
          <NewArrivals/>
          <Testimonial/>
        </div>
    </div>
  )
}

export default Home