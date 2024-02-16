import Header from "./components/header";
import Card from "./components/card";
import AddToDoForm from "./components/AddTodoForm";
import TodoContainer  from "./components/TodoContainer";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./pages/Login";
import './index.css';


import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";


function App()
{

  const [users,setusers] = useState(
    [
        {
            username:"john",
            password:"123"
        },

        {
          username:"abc",
          password:"123"
        }
    ]
)

  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;