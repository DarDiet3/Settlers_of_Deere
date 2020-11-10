import { createSlice } from "@reduxjs/toolkit";

export const gameMetaDataSlice = createSlice({
    name: "gameMetaData",
    initialState: {
        dice: [1, 1],
        dice_total: 2,
        number_tokens: [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10 ,10, 11, 11, 12],
        resource_hexes: ["brick", "brick", "brick", "wood", "wood", "wood", "wood", "rock", "rock", "rock", "wheat", "wheat", "wheat", "wheat", "sheep", "sheep", "sheep", "sheep"]
    },
    reducers: {
        setDice: (state, action) => {
            state.dice = action.payload;
        },
        setTokens: (state, action) => {
            state.number_tokens = action.payload;
        }, 
        setResourceHexes: (state, action) => {
            state.resource_hexes = action.payload;
        },
        // rollDice: (state) => {
        //     const dice1 = Math.floor(Math.random() * 7 ) + 1;
        //     const dice2 = Math.floor(Math.random() * 7 ) + 1;
        //     return [dice1, dice2]
        // }
    }
})

export const { setDice, setTokens, setResourceHexes, rollDice } = gameMetaDataSlice.actions;

export const dice = state => state.gameData.dice;
export const tokens = state => state.gameData.number_tokens;
export const resource_hexes = state => state.gameData.resource_hexes;
export default gameMetaDataSlice.reducer;