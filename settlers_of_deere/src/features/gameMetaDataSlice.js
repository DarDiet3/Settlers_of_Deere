import { createSlice } from "@reduxjs/toolkit";

export const gameMetaDataSlice = createSlice({
    name: "gameMetaData",
    initialState: {
        dice: [0, 0]
    },
    reducers: {
        setDice: (state, action) => {
            status.dice = action.payload;
        }
    }
})

export const dice = state => state.dice;

export default gameMetaDataSlice.reducer;