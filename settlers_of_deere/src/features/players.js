import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "players",
    initialState: {
        players: [
            {
                player: 1,
                color: "red",
                username: null,
                cards: {
                    brick: 0,
                    wood: 0,
                    ore: 0,
                    grain: 0, 
                    wool: 0,
                    total: 0
                },
                player: 1,
                color: "red",
                username: null,
                cards: {
                    brick: 0,
                    wood: 0,
                    ore: 0,
                    grain: 0, 
                    wool: 0,
                    total: 0
                },
                player: 2,
                color: "blue",
                username: null,
                cards: {
                    brick: 0,
                    wood: 0,
                    ore: 0,
                    grain: 0, 
                    wool: 0,
                    total: 0
                },
                player: 3,
                color: "orange",
                username: null,
                cards: {
                    brick: 0,
                    wood: 0,
                    ore: 0,
                    grain: 0, 
                    wool: 0,
                    total: 0
                },
                player: 4,
                color: "white",
                username: null,
                cards: {
                    brick: 0,
                    wood: 0,
                    ore: 0,
                    grain: 0, 
                    wool: 0,
                    total: 0
                }

            }
        ]
    },
    reducers: {

    }
})

export const players = state => state.playes.players;

export default playerSlice.reducer;
