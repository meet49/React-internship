import { createSlice, nanoid } from "@reduxjs/toolkit"
const initialState = {
    data: [],
}

const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            state.data.push({ id: nanoid(), data: action.payload })
        },
        deleteData: (state, action) => {
            const r = state.data.filter((iteam) => iteam.id !== action.payload)
            state.data = r
        }
    }


})

export const { add, deleteData } = todoReducer.actions
export default todoReducer.reducer
