import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../reducer/todoReducer'

export const store = configureStore({
    reducer: {
        todoReducer
    }
})