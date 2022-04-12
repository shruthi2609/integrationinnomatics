import { useEffect, useState } from "react"

const EffectHook=()=>{
    const [count,setCount]=useState(0)
    const [msg,setMsg]=useState("")
    useEffect(
        ()=>console.log("useeffect")
    ,[msg])
    return(
        <div>
            {console.log("render")}
            <h1>Example</h1>
            <h2>{count}</h2>
            <h3>{msg}</h3>
            <button onClick={()=>setCount(count+1)}>count</button>
            <button onClick={()=>setMsg("newdata")}>msg</button>
        </div>
    )

}
export default EffectHook