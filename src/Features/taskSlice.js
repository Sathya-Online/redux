import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 3456,
    abc: 6789,
    task: ['First Task', 'Second Task']
}


export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        increment: (state) => {
          state.value += 1
        },
        decrement: (state) => {
          state.value -= 1;
        },
        incrementByData: (state, action) =>{
          state.value += action.payload
        },
        addTask: (state, action) => {
          state.task.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.task.splice(action.payload, 1);
        }
    }
});

export const { increment, decrement, incrementByData, addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
