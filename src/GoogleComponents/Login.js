const Login=()=>{
    const googleLogin=()=>{
        window.open("http://localhost:3002/auth/google","_self")
    }
    return(
        <div>
            <button onClick={googleLogin}>Login with Google</button>
        </div>

    )
}
export default Login