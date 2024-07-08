import { useState } from "react"




const AddTask = () => {

    const [task, setTask] = useState("");

    const submitTask = () =>{
        alert(task)
    }

    return (
        // <div className="add-task">
        //     <h3>Add Task</h3>
        //     <div className="mb-3">
        //         <label for="exampleFormControlInput1" className="form-label">Task</label>
        //         <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Finish my homework" />
        //     </div>
        // </div>
        <form className="row g-3" onSubmit={submitTask}>
            <div className="col-auto">
                <input type="text" onChange={(event) => setTask(event.target.value)} className="form-control" id="task" placeholder="Task"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add Task</button>
            </div>
        </form>
    )
}

export default AddTask