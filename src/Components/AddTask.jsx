import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTaskObject } from '../Features/taskSlice'
import { useNavigate } from "react-router-dom";

const AddTask = () => {

    const [task, setTask] = useState("");
    const tasks = useSelector(state => state.taskSlice.taskObjects);
    const taskDescriptionList = tasks.map(task => task.taskDescription)
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const submitTask = (event) =>{
        event.preventDefault();  
        if(taskDescriptionList.includes(task)){
            alert("Task already exists")
            return
        }
        dispatch(addTaskObject(task)) 
        navigate('/')
    }

    return (
        
        <>
            <div className="form" style={{textAlign: 'center'}}>
                <form className="row g-3" style={{marginLeft: '30%'}} onSubmit={submitTask}>
                    <div className="col-auto">
                        <input type="text" onChange={(event) => setTask(event.target.value)} className="form-control" id="task" placeholder="Task"/>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Add Task</button>
                    </div>                    
                </form>
            </div>
        </>
    )
}

export default AddTask