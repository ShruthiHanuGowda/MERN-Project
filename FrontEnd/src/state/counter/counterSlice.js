import { createSlice } from "@reduxjs/toolkit"

//initial state
const initialState = {
    value: 0
}

//action slice
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByTwo: (state) => {
            state.value += 2
        },
        DecrementByThree: (state) => {
            state.value += 3
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByTwo, DecrementByThree, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;