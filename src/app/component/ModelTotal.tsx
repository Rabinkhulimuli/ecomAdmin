"use client"
import React, { useEffect, useState } from 'react'
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { BsThreeDots } from "react-icons/bs";
import { IconType } from 'react-icons';
 type ModelType={
    title:string,
    Icon:IconType,
    total:number,
    date:string,
    bgcolor:string
}
export default function ModelTotal({title,Icon,total,date,bgcolor}:ModelType) {
  const[isClient,setIsclient]= useState(false)
  useEffect(()=> {
    setIsclient(true)
  },[])
  if(!isClient) return null
  const data = [
    { date: "Jan", value: 1200 },
    { date: "Feb", value: 100 },
    { date: "Mar", value: 1800 },
    { date: "Apr", value: 20 },
    { date: "May", value: 2000 },
    { date: "Jun", value: 30 },
    { date: "Jul", value: 3000 },
  ];
  
  return (
    <div className='px-7 max-w-120 space-y-2 py-4 rounded-lg bg-white shadow-md '>
      <div className='space-y-6'>
        <div className='flex  justify-between'>
           <h2 className='text-3xl font-semibold text-black/50'>{title} </h2>
        <BsThreeDots className='w-7 h-7 text-black/50 cursor-pointer'/>
        </div>
       <div className='flex items-center gap-6'>
        <div style={{backgroundColor:bgcolor}} className={`p-2 w-fit rounded-full `}>
        <Icon className='w-16 h-16 p-0.5 text-white '/>
        </div>
        <div className='flex flex-col capitalize'>
          <span className='font-semibold text-2xl '>{total} </span>
          <span className='text-black/50'>compared to {date}</span>
        </div>
       </div>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={4} dot={false} />
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
