import axios from "axios";

const base_url = "http://localhost:9000";
const token = sessionStorage.getItem('token');

if(!token){
    console.error("no token");
}
console.log(`Bearer ${token}`)
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


export const getRequest = async(path) =>{
   try{
    const respnose = await axios.get(base_url+path);
    return respnose;
   }catch(error){
    // if(error.response.status ===401){
    //     sessionStorage.removeItem("token")
    //     sessionStorage.removeItem("username");
    //     sessionStorage.removeItem("user_id")
    //     window.location.href = "/login";
    // }
   }
}
export const postRequest = async(path,data) =>{
    try{
     const respose = await axios.post(base_url+path,data);
     return respose;
    }catch(error){
     if(error.respose.status ===401){
         sessionStorage.removeItem("token")
         sessionStorage.removeItem("username");
         sessionStorage.removeItem("user_id")
         window.location.href = "/login";
     }
    }
 }