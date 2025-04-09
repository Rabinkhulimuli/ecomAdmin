
import axios from "axios"
export const useCreateProduct= ()=> {
    
        const createProduct = async(data:FormData)=> {
            try{
                console.log("form data",data)
              const res= await axios.post("http://localhost:3001/admin/create-product",data,{
                headers:{
                    'Content-Type':"multipart/form-data"
                },
                withCredentials:true
            })  
            return res
            }catch(err){
                console.log(err)
                throw new Error("error creating product")
            }  
        }

  
    return {createProduct}
}