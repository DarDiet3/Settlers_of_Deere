import { createSlice } from "@reduxjs/toolkit";

export const settlementNodeSlice = createSlice({
    name: "settlementNodeSlice",
    initialState: {
        settlements: [
            {
                id: 1,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [1, 2],
                color: "red"
            },
            {
                id: 2,
                owner: null,
                type: null,
                port: "hay",
                canBuild: [],
                roads: [3, 4],
                color: "orange"
            },
            {
                id: 3,
                owner: null,
                resource: null,
                port: null,
                canBuild: [],
                roads: [5, 6],
                color: "blue"
            },
            {
                id: 4,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [1, 7],
                color: null
            },
            {
                id: 5,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [2, 3],
                color: null
            },
            {
                id: 6,
                owner: null,
                type: null,
                port: "hay",
                canBuild: [],
                roads: [4, 5],
                color: null
            },
            {
                id: 7,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [6, 10],
                color: null
            },
            {
                id: 8,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [7, 11, 12],
                color: null
            },
            {
                id: 9,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [13, 14, 8],
                color: null
            },
            {
                id: 10,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [15, 16, 9],
                color: null
            },
            {
                id: 11,
                owner: null,
                type: null,
                port: "rock",
                canBuild: [],
                roads: [17, 18, 10],
                color: null
            },
            {
                id: 12,
                owner: null,
                type: null,
                port: "wood",
                canBuild: [],
                roads: [11, 19],
                color: null
            },
            {
                id: 13,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [12, 13, 20],
                color: null
            },
            {
                id: 14,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [14, 15, 21],
                color: null
            },
            {
                id: 15,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [16, 17, 22],
                color: null
            },
            {
                id: 16,
                owner: null,
                type: null,
                port: "rock",
                canBuild: [],
                roads: [18, 23],
                color: null
            },
            {
                id: 17,
                owner: null,
                type: null,
                port: "wood",
                canBuild: [],
                roads: [19, 24, 25],
                color: null
            },
            {
                id: 18,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [20, 26, 27],
                color: null
            },
            {
                id: 19,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [21, 28, 29],
                color: null
            },
            {
                id: 20,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [22, 30, 31],
                color: null
            },
            {
                id: 21,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [23, 32, 33],
                color: null
            },
            {
                id: 22,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [24, 34],
                color: null
            },
            {
                id: 23,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [25, 26, 35],
                color: null
            },
            {
                id: 24,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [27, 28, 36],
                color: null
            },
            {
                id: 25,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [29, 30, 37],
                color: null
            },
            {
                id: 26,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [31, 32, 38],
                color: null
            },
            {
                id: 27,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [33, 39],
                color: null
            },
            {
                id: 28,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [34, 40],
                color: null
            },
            {
                id: 29,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [35, 41, 42],
                color: null
            },
            {
                id: 30,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [36, 43, 44],
                color: null
            },
            {
                id: 31,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [37, 45, 46],
                color: null
            },
            {
                id: 32,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [38, 47, 48],
                color: null
            },
            {
                id: 33,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [39, 49],
                color: null
            },
            {
                id: 34,
                owner: null,
                type: null,
                port: "brick",
                canBuild: [],
                roads: [40, 41, 50],
                color: null
            },
            {
                id: 35,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [42, 43, 51],
                color: null
            },
            {
                id: 36,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [44, 45, 52],
                color: null
            },
            {
                id: 37,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [46, 47, 53],
                color: null
            },
            {
                id: 38,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [48, 49, 54],
                color: null
            },
            {
                id: 39,
                owner: null,
                type: null,
                port: "brick",
                canBuild: [],
                roads: [50, 55],
                color: null
            },
            {
                id: 40,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [51, 56, 57],
                color: null
            },
            {
                id: 41,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [52, 58, 59],
                color: null
            },
            {
                id: 42,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [53, 60, 61],
                color: null
            },
            {
                id: 43,
                owner: null,
                type: null,
                port: "sheep",
                canBuild: [],
                roads: [54, 62],
                color: null
            },
            {
                id: 44,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [55, 56, 63],
                color: null
            },
            {
                id: 45,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [57, 58, 64],
                color: null
            },
            {
                id: 46,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [59, 60, 65],
                color: null
            },
            {
                id: 47,
                owner: null,
                type: null,
                port: "sheep",
                canBuild: [],
                roads: [61, 62,66],
                color: null
            },
            {
                id: 48,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [63, 67],
                color: null
            },
            {
                id: 49,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [64, 68, 69],
                color: null
            },
            {
                id: 50,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [65, 70, 71],
                color: null
            },
            {
                id: 51,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [66, 72],
                color: null
            },
            {
                id: 52,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [67, 68],
                color: null
            },
            {
                id: 53,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [69, 70],
                color: null
            },
            {
                id: 54,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [71, 72],
                color: null
            }
        ]
    }, 
    reducers: {

    }
})



export const settlements = state => state.settlements.settlements;

export default settlementNodeSlice.reducer;