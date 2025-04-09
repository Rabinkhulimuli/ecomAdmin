"use client";
import { RootState } from "@/redux/store";
import HomePag from "./component/Home";
import { useSelector } from "react-redux";
import Product from "@/components/Product/Product";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { verifyAdmin } from "@/lib/adminuser";
import { useAuth } from "@/context/AuthContext";
import Category from "@/components/Product/Category";

export default function Home() {
  const title = useSelector((state: RootState) => state.title.title);
  const subTitle= useSelector((state:RootState)=> state.title.subTitle)
  const [verified, setVerified] = useState(false);
  const { user } = useUser();
  const{setToken}= useAuth()
  useEffect(() => {
    if (!user) return;
    const verify=async()=> {
      if (!verified) {
      try {
       const data= await verifyAdmin({
          email: user?.emailAddresses[0].emailAddress ?? "",
          id: user.id,
        });
        setToken(data.token)
        setVerified(true);
      } catch (err) {
        console.log(err);
      }
    }
    }
    verify()
  }, [user, verified,setToken]);
  const Exchange = () => {
    if(title !=="Dashboard"){
      switch (subTitle) {
        case "Add New Product":
          return <Product />;
        case "Create Category":
          return<Category/>
        default:
          return <HomePag />;
      }
    }else{
      return <HomePag />
    }
  };
  return <>{Exchange()}</>;
}
