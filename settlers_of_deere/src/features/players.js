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
                    rock: 0,
                    wheat: 0, 
                    sheep: 0,
                    total: 0
                },
                settlements_unplayed: 5,
                settlements_played: 0, 
                cities_unplayed: 4,
                cities_played: 0,
                roads_unplayed: 15,
                roads_played: 0
            },
            {
                player: 2,
                color: "blue",
                username: null,
                cards: {
                    brick: 0,
                    wood: 0,
                    rock: 0,
                    wheat: 0, 
                    sheep: 0,
                    total: 0
                },
                settlements_unplayed: 5,
                settlements_played: 0, 
                cities_unplayed: 4,
                cities_played: 0,
                roads_unplayed: 15,
                roads_played: 0
            }, 
            {
                player: 3,
                color: "orange",
                username: null,
                cards: {
                    brick: 0,
                    wood: 0,
                    rock: 0,
                    wheat: 0, 
                    sheep: 0,
                    total: 0
                },
                settlements_unplayed: 5,
                settlements_played: 0, 
                cities_unplayed: 4,
                cities_played: 0,
                roads_unplayed: 15,
                roads_played: 0
            }, 
            {
                player: 4,
                color: "white",
                username: null,
                cards: {
                    brick: 0,
                    wood: 0,
                    rock: 0,
                    wheat: 0, 
                    sheep: 0,
                    total: 0
                },
                settlements_unplayed: 5,
                settlements_played: 0, 
                cities_unplayed: 4,
                cities_played: 0,
                roads_unplayed: 15,
                roads_played: 0
            }
        ]
    },
    reducers: {

    }
})

export const players = state => state.playes.players;

export default playerSlice.reducer;
