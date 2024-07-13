import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskObjects: [
      {
        id: 1,
        taskDescription: 'This is the first task',
        status: false
      }
  ]
}


export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTaskObject: (state, action) => {
          state.taskObjects.push({
            id: state.taskObjects.length + 1,
            taskDescription: action.payload,
            status: false
          });
        },
        changeTaskObject: (state, action) => {
          state.taskObjects.map(task => {
            if (task.id === action.payload) {
              task.status = !task.status
            }
            return task;
          })
        }

    }
});

export const { addTaskObject, changeTaskObject } = taskSlice.actions;

export default taskSlice.reducer;
