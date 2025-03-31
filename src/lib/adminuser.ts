
import axios from "axios"
export const useCreateUser= async(data:userType)=> {
   
        const res= await axios.post("http://localhost:3001/user",data)
        console.log(res)
   
    return res.data
}