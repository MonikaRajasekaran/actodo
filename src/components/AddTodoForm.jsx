import { useState } from "react"

function AddTodoForm(props)
{
    const activityArr = props.activityArr 
    const setActivityArr = props.setActivityArr 

    const [newactivity,setNewactivity] = useState("")

    function handleChange(evt)
    {
        setNewactivity(evt.target.value)
    }

    function addActivity()
    {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity("")
    }

    return(
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium text-[#6C0062]">Manage Activities</h1>

        <div>
        <input value={newactivity} onChange={handleChange} type="text" className="border rounded-md border-[#710069] bg-transparent p-3 placeholder-black focus:border-transparent" placeholder="Next Activity?"/>
        <button onClick={addActivity} className="text-white bg-[#710069] p-3 rounded-md ">Add</button>
        </div>

    </div>
    )
}

export default AddTodoForm