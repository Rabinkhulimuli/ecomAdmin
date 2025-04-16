"use client"
import React from 'react'
import ModelComp from '../dashboard/Model'
import { RiFunctionAddLine } from "react-icons/ri";
/* 
type FormValues = {
  title: string;
  description: string;
  price: number;
  stock:number;
  category: string;
  brand:string
  discount: number;
  images:string[];
  reviews:[{
    rating:number;
    comment:string;
    reviewerEmail:string;
    reviewerName:string;
    

  }];
  dimensions:{
    depth:number;
    height:number;
    width:number
  }
returnPolicy:string;
discountPercentage:number
};
type ProductAPIResponse = {
  products: FormValues[]; // FormValues[] represents your mapped product model
  total: number;
  skip: number;
  limit: number;
}; */
function AddProduct() {
    /* useEffect(()=> {
      const productData= async()=> {
        try{
          const limit=30
          let skip=90
          let total=0
          let hasMore=true
          while(hasMore){
            const {data}:{data:ProductAPIResponse}= await axios.get(`https://dummyjasasson.com/products?limit=${limit}&skip=${skip}`)
            if(skip===0){
              total=data.total;
            }
            const modal= data.products.map((eh)=> ({
              name:eh.title,
              description:eh.description,
              price:eh.price,
              stock:eh.stock,
              category:eh.category,
              brand:eh.brand || "Not Branded",
              discount:eh.discountPercentage || 0,
              images:eh.images,
              reviews:eh.reviews ||[],
              dimensions:eh?.dimensions,
              returnPolicy:eh?.returnPolicy || "30-day return",
    
            }) )
            for (const product of modal){
              try{
                await axios.post("http://localhost:3001/admin/upload-product",product,{
                  headers:{
                    'Content-Type':'application/json'
                  }
                })
              }catch(err){
                console.log(err)
              }
            }
            skip +=limit;
            hasMore= skip <total
            await new Promise(resolve=> setTimeout(resolve,1000))
          }
          console.log("all products processed")
        }catch(err){
          console.log(err)
        }
      }
      productData()
    },[]) */
    const compitem=["Add New Product","Update Product","Create Category","Update Category"]
  return (
    <div>
        <ModelComp title='Add Products' compItem={compitem} IconName='RiFunctionAddLine' Icon={RiFunctionAddLine} />
    </div>
  )
}

export default AddProduct