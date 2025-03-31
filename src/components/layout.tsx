import React from 'react'
import RightLayout from './RightLayout'
import TopLayout from './TopLayout'

function Layout() {
  return (
    <div className='flex'>
        <RightLayout/>
        <TopLayout/>
    </div>
  )
}

export default Layout