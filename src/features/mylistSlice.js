import { createSlice } from '@reduxjs/toolkit'

export const mylistSlice = createSlice({
    name: 'list',
    initialState: {
        list: [],
    },
    reducers: {
        addMovie(state, action) {
            state.list.push(action.payload);
        },
        delMovie(state, action) {
            const newTodos = state.list.filter(todo => todo.id !== action.payload);
            state.list = newTodos;
        }
    },
})


export const { addMovie, delMovie } = mylistSlice.actions;

export const selectList = state => state.list.list;

export default mylistSlice.reducer;