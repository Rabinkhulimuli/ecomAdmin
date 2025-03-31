"use client"

import { BiDollarCircle } from "react-icons/bi";
import ModelTotal from "./ModelTotal";
import { RiShoppingBag4Line } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { FaHandHoldingDollar } from "react-icons/fa6";
export default function HomePag() {
 
  return (
    <div className="flex flex-col lg:flex-row gap-7 lg:gap-2 items-center">
      <div  className="flex gap-2">
      <ModelTotal title="Total sells" Icon={BiDollarCircle} total={128382} date="jan 2020" bgcolor="#145765" />
      <ModelTotal title="Orders Value" Icon={RiShoppingBag4Line} total={47282} date="jan 2020" bgcolor="#564b86" />
      
      </div>
      <div className="flex gap-2">
      <ModelTotal title="Daily Orders" Icon={GoChecklist} total={35382} date="jan 2020" bgcolor="#b37056" />
      <ModelTotal title="Daily revenue" Icon={FaHandHoldingDollar} total={58382} date="jan 2020" bgcolor="#9d4178" />
    
      </div>
      </div>
  )
}
