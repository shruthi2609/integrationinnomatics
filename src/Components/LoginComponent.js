import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const LoginComponent=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [msg,setMsg]=useState("")
    const [status,setStatus]=useState("")
    const naviagte=useNavigate()
    const handleChange=(e,key)=>{
        if(key==="email"){
            setEmail(e.target.value)
        }
        else if(key==="password"){
            setPassword(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/signin",{
            "email":email,
            "password":password
        }).then((res)=>{
            setMsg(res.data.msg)
            setStatus(res.data.status)
            localStorage.setItem("UserToken",res.data.token)
        }).catch((err)=>console.log("post req failed reason ",err))
    }
    const handleNavigate=()=>{
        naviagte(`/dashboard/${email}`)
    }
    return(
        <div>
            <form>
                <input type="text" placeholder="enter email"
                onChange={(e)=>handleChange(e,"email")}></input>
                <input type="text" placeholder="enter password"
                onChange={(e)=>handleChange(e,"password")}></input>
                <button onClick={(e)=>handleLogin(e)}>login</button>
            </form>
            {console.log(status,msg)}
           {
               status?handleNavigate():<h1>{msg}</h1>
           } 
        </div>
    )
}
export default LoginComponent