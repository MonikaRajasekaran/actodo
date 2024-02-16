import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props)
{

    const navigate = useNavigate()
    const users = props.users 
    const setusers = props.setusers

    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])   
        navigate("/")
    }


    return(
        <section className="signup h-screen w-full  bg-cover bg-no-repeat">
        <div className=" flex justify-center items-center h-screen">
        <div className="bg-[#5B4C8D] p-5 border-[#422e85] text-white md:h-1/2 md:w-1/3 rounded-md ">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>Sign up here :)</p>

            <div className="flex flex-col gap-2 my-4 ">
                <input 
                type="text" 
                className="w-90 border-[#B1E3E0] p-1 bg-transparent border rounded-md" 
                placeholder="username"
                onChange={handleUInput}
                />

<input 
                type="text" 
                className="w-90 border-[#B1E3E0] p-1 bg-transparent border rounded-md" 
                placeholder="password"
                onChange={handlePInput}
                />

<input 
                type="text" 
                className="w-90 border-[#B1E3E0] p-1 bg-transparent border rounded-md" 
                placeholder="Confirm password"/>

                

                <div className="flex justify-center">
                <button className="bg-[#8272DA] border-[#6C0062] mb-4 w-30 p-2 font-bold text-2xl text-[#B1E3E0] rounded-md" onClick={addUser}>
                    Sign Up
                </button>
                        </div>
                        <div className="flex justify-center">
                        <p>Already have an account? <Link to={"/"} className="underline">Login</Link>  </p>

                        </div>

            </div>
        </div>
    </div>
    </section>)
}

export default Signup
