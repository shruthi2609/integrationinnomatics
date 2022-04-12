import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const DashBoardComponent=()=>{ 
    const {email}=useParams()
    const [result,setResult]=useState({})
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    useEffect(()=>
    {
        axios.get(`http://localhost:3001/getUser/${email}`).then((res)=>
        {
            setResult(res.data)
            setLoading(true)
        }).catch((err)=>console.log("error",err))
    },[])
   /* const handleSearch=()=>{
        axios.get(`http://localhost:3001/getUser/${email}`).then((res)=>
        {
            setResult(res.data)
            setLoading(true)
        }).catch((err)=>console.log("error",err))
    }*/
    const handleChange=()=>{
        navigate("/update")
    }
    return(
        <div>
            {console.log("inside render")}
  {loading?      
   <div> <h3>Welcome {result.hits.email}</h3>
            <p>Country:{result.hits.country}</p>
    <p>PinCode:{result.hits.pincode}</p></div>:<h2>loading...</h2>
          /*  <button onClick={handleSearch}>show details</button>*/}
          <button onClick={handleChange}>update profile</button>
        </div>
        
    )
}
export default DashBoardComponent