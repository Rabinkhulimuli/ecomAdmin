"use client"
import React from 'react'
import ModelComp from '../dashboard/Model'
import { MdOutlineSettingsApplications } from "react-icons/md";
export default function Application() {
    const applicationArr=["default","default","default","default"]
  return (
    <div>
        <ModelComp IconName='MdOutlineSettingsApplications'  title='Applications' compItem={applicationArr} Icon={MdOutlineSettingsApplications} />
    </div>
  )
}
