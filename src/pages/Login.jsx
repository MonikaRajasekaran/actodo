import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const [eusername, setEusername] = useState();
    const [epassword, setEpassword] = useState();
    const [ruser, setRuser] = useState(true);

    const users = props.users;

    function handleUInput(evt) {
        setEusername(evt.target.value);
    }

    function handlePInput(evt) {
        setEpassword(evt.target.value);
    }

    function checkUser() {
        var userfound = false;

        users.forEach(function(item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Successfull");
                userfound = true;
                navigate("/landing", { state: { user: eusername } });
            }
        });

        if (userfound === false) {
            console.log("login Failed");
            setRuser(false);
        }
    }

    return (
<section className="login h-screen w-full  bg-cover bg-no-repeat">
           <div className=" flex justify-center items-center h-screen">
           <div className="bg-[#5B4C8D] p-5 border-[#422e85] text-white md:h-1/2 md:w-1/3 rounded-md ">
                <h1 className="text-3xl font-medium">Hey Hi,...</h1>
                {ruser ? (
                    <p>I help you manage your activities after you login :)</p>
                ) : (
                    <p className="text-red-500">
                        Please Sign Up Before you Login!!
                    </p>
                )}

                <div className="flex flex-col gap-2 my-2">
                    <label>User Name</label>
                    <input
                        type="text"
                        className="w-80 p-1 bg-transparent border rounded-md focus:placeholder-transparent focus:border-transparent"
                        placeholder="Username"
                        onChange={handleUInput}
                    />
                     <label>Password</label>
                    <input
                        type="text"
                        className="w-80 p-1 bg-transparent border rounded-md focus:placeholder-transparent focus:border-transparent"
                        placeholder="password"
                        onChange={handlePInput}
                    />

                        <div className="flex justify-center">
                        <button
                            className="bg-[#8272DA] mt-5  w-24 p-2 font-bold text-2xl text-white rounded-md"
                            onClick={checkUser}
                        >
                            Login
                        </button>
                        </div>

                    <p className="flex justify-center" >
                        Don't have an account?{" "}
                        <Link to={"/signup"} className="underline">
                            Sign Up
                        </Link>{" "}
                    </p>
                </div>
            </div>
           </div>
        </section>
    );
}

export default Login;
