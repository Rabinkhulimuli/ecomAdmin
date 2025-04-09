import React from 'react'
import HeroSection from './toplayout/HeroSection'
import HeroRight from './toplayout/HeroRight'

function TopLayout() {
  return (
    <div className='flex justify-between  w-full  px-4 py-2'>
      <HeroSection/>
      <HeroRight/>
    </div>
  )
}

export default TopLayout