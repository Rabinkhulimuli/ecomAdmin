"use client"
import { RootState } from "@/redux/store";
import HomePag from "./component/Home";
import { useSelector } from "react-redux";
import Product from "@/components/Product/Product";

export default function Home() {
const title= useSelector((state:RootState)=> state.title.title)
const Exchange= ()=> {
  switch(title){
    case "Add Products":
      return <Product/>
    default:
      return <HomePag/>

  }
}
  return (
    <>
  {Exchange()}
    </>
  );
}
