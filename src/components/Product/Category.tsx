"use client"
import React, { useState } from 'react'

export default function Category() {
    const[name,setName]= useState("")
    
  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold'>Create new Category</h2>
        <h2>Category Name</h2>
        <div> <input className='border-1 px-2 py-1 rounded-md ' type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Name' /> </div>
        <button className='bg-blue-700 w-fit  px-4 py-1 text-white text-lg rounded-md capitalize cursor-pointer'>create category </button>
    </div>
  )
}
