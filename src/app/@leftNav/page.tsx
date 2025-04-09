import Application from '@/components/application/Application'
import Dashboard from '@/components/dashboard/dashboard'
import AddProduct from '@/components/Product/AddProduct'
import React from 'react'

export default function Leftnav() {
  return (
    <div>
         <div className=' md:w-64 bg-blue-900  h-screen text-white'>
        <Dashboard />
        <Application />
        <AddProduct/>
        </div>
    </div>
  )
}
