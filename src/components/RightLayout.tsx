
import React from 'react'
import Dashboard from './dashboard/dashboard'
import Application from './application/Application'

function RightLayout() {
  return (
    <div className='fixed'>
        <div className='hidden sm:block md:w-64 bg-blue-900  h-screen text-white'>
        <Dashboard />
        <Application />
        </div>
    </div>
  )
}

export default RightLayout