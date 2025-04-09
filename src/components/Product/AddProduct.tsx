"use client"
import React from 'react'
import ModelComp from '../dashboard/Model'
import { RiFunctionAddLine } from "react-icons/ri";
function AddProduct() {
    const compitem=["Add New Product","Update Product","Create Category","Update Category"]
  return (
    <div>
        <ModelComp title='Add Products' compItem={compitem} IconName='RiFunctionAddLine' Icon={RiFunctionAddLine} />
    </div>
  )
}

export default AddProduct