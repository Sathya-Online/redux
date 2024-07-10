import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByData, addTask, deleteTask } from "../Features/taskSlice";




const AddTask = () => {

    const [task, setTask] = useState("");

    const value = useSelector((state) => state.taskSlice.value);
    const abc = useSelector(state => state.taskSlice.abc);

    const tasks = useSelector(state => state.taskSlice.task)
    const dispatch = useDispatch();
    const [customValue, setCustomValue] = useState();

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleValue = () => {
        dispatch(incrementByData(Number(customValue)))
    }

    const submitTask = () =>{
        dispatch(addTask(task))
    }

    return (
        // <div className="add-task">
        //     <h3>Add Task</h3>
        //     <div className="mb-3">
        //         <label for="exampleFormControlInput1" className="form-label">Task</label>
        //         <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Finish my homework" />
        //     </div>
        // </div>
        <>
        <h1>Value: {value}</h1>
        <h1>ABC: {abc}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <br/>
        <input onChange={(event) => setCustomValue(event.target.value)}/>
        <button onClick={handleValue}>Custom</button>
        <form className="row g-3" onSubmit={submitTask}>
            <div className="col-auto">
                <input type="text" onChange={(event) => setTask(event.target.value)} className="form-control" id="task" placeholder="Task"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add Task</button>
            </div>
            
        </form>
        <div>
                {tasks.map((task, idx) =><div key={idx}>
                        <h2 >{task}</h2>
                        <button onClick={() => dispatch(deleteTask(idx))} className="btn btn-danger mb-3">Remove</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default AddTask