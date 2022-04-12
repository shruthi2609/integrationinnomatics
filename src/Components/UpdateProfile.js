import axios from "axios"
import { useState } from "react"

const UpdateProfile=()=>{
    const [upassword,setUpassword]=useState("")
    const handleChange=(e)=>{
        setUpassword(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/changepw",{upassword:upassword},{
            headers:{Authorization:"Bearer "+localStorage.getItem("UserToken")}
        }).then((res)=>console.log(res)).catch((err)=>console.log("error"))
    }

    return(
        <div>
          
<form>
            Enter the new password:
            <input type="text" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSubmit(e)}>ok</button>
</form>
        </div>
    )
}
export default UpdateProfile