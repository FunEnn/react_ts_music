import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
    count: number
    message: string
    address: string
}

const initialState: IState = {
    count: 100,
    message: "hello world",
    address: "广州"
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        changeMessageAction: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        }
    },
})

export const { changeMessageAction } = counterSlice.actions;
export default counterSlice.reducer;