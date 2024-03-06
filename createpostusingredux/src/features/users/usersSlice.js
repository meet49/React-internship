
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Meet Sojira' },
    { id: '1', name: 'Harshil' },
    { id: '2', name: 'Jems' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer