
import axios from "axios"
export const useCreateUser= async(data:userType)=> {
   
        const res= await axios.post("http://localhost:3001/user",data)
        console.log(res)
   
    return res.data
}
interface verifyUser{
    email:string
    id:string
}
interface verifyAdminres{
    token:string
}
export const verifyAdmin= async(data:verifyUser):Promise<verifyAdminres>=> {
    try{
        const res= await axios.post("http://localhost:3001/admin/verifyuser",data,{
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        })
        return res.data

    }catch(err){
        console.log(err)
        throw new Error("error verifying admin")
    }
}