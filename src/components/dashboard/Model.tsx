"use client"
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { IconType } from "react-icons";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setIcon, setTitle } from "@/redux/slice/stateSlice";
type ModelType={
    title:string,
    compItem:string[],
    Icon:IconType,
    IconName:string
}
function ModelComp({title,Icon,compItem,IconName}:ModelType) {
    const [innerComp,setInnerComp]= useState(0)
    const dispatch= useAppDispatch()
    const getTitle= useAppSelector((state)=> state.title.title)
    const itemsComp= compItem.map((eh,_index)=> <div key={_index} className="flex gap-2 items-center">
    <svg className="flex items-center justify-center" width="26" height="12">
      <line
        x1="0"
        y1="6"
        x2="15"
        y2="6"
        stroke="white"
        strokeWidth="1"
      />
      <circle cx="15" cy="6" r="4" fill="white" />
    </svg>
    <Link href="" onClick={()=> setInnerComp(_index)} className={`${innerComp===_index?"text-white":"text-white/70"}`}>{eh}</Link>
  </div>)
  return (
    <div className="flex flex-col w-full ">
      <div onClick={()=> {dispatch(setTitle(title))
        dispatch(setIcon(IconName))
      }} className={`flex cursor-pointer items-center gap-2 justify-between py-2 px-4  hover:bg-white/10 ${getTitle==title?"bg-gray-700":""}`}>
        <div className="flex items-center gap-2">
          <Icon className="w-6 h-6" />
          <h2  >{title} </h2>
        </div>
        <IoIosArrowForward className={`${getTitle==title?"rotate-90":""}`} />
      </div>
      <div className={`flex px-7 overflow-y-hidden transition-all duration-700 ease-in-out ${getTitle==title?`block scale-100 h-${6 * compItem.length}`:"scale-0 opacity-0 h-0 "}`}>
        <span className="bg-black border"></span>
        <div className="flex flex-col">
            {itemsComp}
        </div>
       
      </div>
    </div>
  );
}

export default ModelComp;
