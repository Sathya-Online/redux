import { useDispatch, useSelector } from "react-redux";
import {changeTaskObject} from '../Features/taskSlice'

const Tasks = () => {
    
    const tasks = useSelector(state => state.taskSlice.taskObjects)
    const dispatch = useDispatch();

    return (
        <div className="tasks" textAlign="center">
            <h1>Tasks</h1>
            <div className="card"  style={{width: '50%', marginLeft: '25%'}}>
                <div className="card-body">
                    {
                        tasks.map(task => {
                            return <div className="task" key={task.id}>
                                    <h5 className="card-title">{task.taskDescription} 
                                        {
                                            task.status ? 
                                            <>
                                                <span style={{color:'green'}}> Done </span>
                                                <button onClick={() => dispatch(changeTaskObject(task.id))} className="btn btn-danger">Re Open</button> 
                                            </>
                                            : 
                                            <>
                                                <span style={{color:'red'}}> Not Done </span>
                                                <button onClick={() => dispatch(changeTaskObject(task.id))} className="btn btn-success">Mark as Done</button>
                                            </>
                                        }
                                    </h5>
                                </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Tasks