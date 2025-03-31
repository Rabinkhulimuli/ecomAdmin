"use client"
import React from "react";
import { PiHouseThin } from "react-icons/pi";
import ModelComp from "./Model";
function Dashboard() {
  const applicationArr=["default","default"]
  return (
    <div>
        <ModelComp  IconName="PiHouseThin" title='Dashboard' compItem={applicationArr} Icon={PiHouseThin} />
    </div>
  );
}

export default Dashboard;
