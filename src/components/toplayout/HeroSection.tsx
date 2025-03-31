"use client"
import { RootState } from '@/redux/store'
import React from 'react'
import { IconType } from 'react-icons'
import { PiHouseThin } from 'react-icons/pi'

import { MdOutlineSettingsApplications } from "react-icons/md";
import { useSelector } from 'react-redux'

function HeroSection() {
    const getTitle= useSelector((state: RootState)=> state.title.title)
    const Icon= useSelector((state:RootState)=> state.Icon.Icon)
    const Iconobj:{[key:string]:IconType}={ PiHouseThin: PiHouseThin,
        MdOutlineSettingsApplications:MdOutlineSettingsApplications
    }
    console.log(Icon)
    const SelectedIcon=Iconobj[Icon] 
    return (
    <div className='w-full'>
        <h2 className='md:text-xl font-semibold text-nowrap'>Ecommerce {getTitle} </h2>
        <div className='flex items-center text-xs md:text-[16px] gap-1'>
            {SelectedIcon && <SelectedIcon className='w-4 h-4 md:w-5 md:h-5' /> }
            <span>/ {getTitle} </span>
            <span className='text-blue-600'>/ Ecommerce</span>
        </div>
    </div>
  )
}

export default HeroSection