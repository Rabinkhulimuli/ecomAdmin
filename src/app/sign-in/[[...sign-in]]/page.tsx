import { SignIn } from '@clerk/nextjs'
import React from 'react'

function page() {
  return <div className='flex flex-col bg-black/70 text-white gap-4 items-center h-screen justify-center '>
    <SignIn/>
  </div>
}

export default page