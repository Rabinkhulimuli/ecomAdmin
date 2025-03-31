"use client"
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
function HeroRight() {
    const [active,setActive]= useState(false)
    const[mobBound,setMobBound] = useState(false)
    useEffect(()=> {
      if(typeof window == "undefined") return
      const handleResize=()=> {
        setMobBound(window.innerWidth>1024)
      }
      handleResize()
      if(active && mobBound){
        setActive(false)
      }
      window.addEventListener("resize",handleResize)
      return ()=> window.removeEventListener("resize",handleResize)
    },[active,mobBound])
    const handleActive=useCallback(()=> {
      if(!mobBound){
        setActive(!active)
      }
    },[mobBound,active])
   
    const IconArr=useMemo(()=> {
      const iconArr=[IoMdNotificationsOutline,BsBookmark,FiMoon,FiShoppingBag,CiMail]
      return iconArr.map((Eh,_index)=> <div key={_index} onClick={handleActive} className=' cursor-pointer bg-gray-300 w-fit p-1 rounded-full'>
    <Eh className='w-5 h-5 md:w-7 md:h-7' />
  </div>)},[handleActive])
  const {user}= useUser()
  const MobUseComp=(prop:string)=> <div className=' flex items-center gap-2'>
    <div className={`flex gap-2 ${prop==="mobnav"?" flex-col":"flex-row"}`}>
            {IconArr}
          </div>
         {user && <div  className={`flex w-full  items-center  cursor-pointer ${prop=="mobnav"?"flex-col gap-1":"gap-2"}`}>
                <div onClick={handleActive} className=''>
                    <Image className='md:w-8 md:h-8 object-cover rounded-full ' src={user?.imageUrl} alt="" width={100} height={100} />
                </div>
                <div onClick={handleActive}>
                    <h2 className='text-xs md:text-sm'>{user.firstName} </h2>
                </div>
          </div>}
  </div>
  
  return (
    <div className=' flex w-full h-fit gap-2 items-center relative'>
        <div className="  sm:flex mr-12 items-center px-5 py-1 justify-between bg-gray-50">
            <input
              className="text-lg w-full outline-none"
              type="text"
              name="search"
              placeholder="search"
            />
            <div>
              <CiSearch className="w-6 h-6 hidden lg:block" />
            </div>
          </div>
        <div className='hidden lg:flex'>
            {MobUseComp("screen")}
        </div>
        <div className='absolute top-2  md:top-0 right-2'>
        <div className='p-1'>
        <FaBars onClick={handleActive} className='w-5 h-5  md:w-7 md:h-7 block lg:hidden cursor-pointer' />
        
        </div>
        <div className={` relative transition-all duration-700 ease-in-out overflow-y-clip ${active?"h-80":"h-0"}`}>
            <div className='absolute top-2 md:top-5 right-0'>
                {MobUseComp("mobnav")}   
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default HeroRight