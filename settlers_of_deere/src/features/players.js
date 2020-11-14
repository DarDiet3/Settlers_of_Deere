import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "players",
    initialState: {
        players: [
            {
                player: 1,
                color: "red",
                username: "pork",
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
                roads_played: 0,
                devCards: [],
                points: 0,
                specialCards: []
            },
            {
                player: 2,
                color: "blue",
                username: "Player 2",
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
                roads_played: 0,
                devCards: [],
                points: 0,
                specialCards: []
            }, 
            {
                player: 3,
                color: "orange",
                username: "Player 3",
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
                roads_played: 0,
                devCards: [],
                points: 0,
                specialCards: []
            }, 
            {
                player: 4,
                color: "white",
                username: "Player 4",
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
                roads_played: 0,
                devCards: [],
                points: 0,
                specialCards: []
            }
        ]
    },
    reducers: {

    }
})

export const players = state => state.players.players;

export default playerSlice.reducer;
