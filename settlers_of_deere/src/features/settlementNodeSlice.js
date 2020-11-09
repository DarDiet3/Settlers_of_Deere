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
                roads: [1, 2]
            },
            {
                id: 2,
                owner: null,
                type: null,
                port: "hay",
                canBuild: [],
                roads: [3, 4]
            },
            {
                id: 3,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [5, 6]
            },
            {
                id: 4,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [1, 7]
            },
            {
                id: 5,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [2, 3]
            },
            {
                id: 6,
                owner: null,
                type: null,
                port: "hay",
                canBuild: [],
                roads: [4, 5]
            },
            {
                id: 7,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [6, 10]
            },
            {
                id: 8,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [7, 11, 12]
            },
            {
                id: 9,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [13, 14, 8]
            },
            {
                id: 10,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [15, 16, 9]
            },
            {
                id: 11,
                owner: null,
                type: null,
                port: "rock",
                canBuild: [],
                roads: [17, 18, 10]
            },
            {
                id: 12,
                owner: null,
                type: null,
                port: "wood",
                canBuild: [],
                roads: [11, 19]
            },
            {
                id: 13,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [12, 13, 20]
            },
            {
                id: 14,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [14, 15, 21]
            },
            {
                id: 15,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [16, 17, 22]
            },
            {
                id: 16,
                owner: null,
                type: null,
                port: "rock",
                canBuild: [],
                roads: [18, 23]
            },
            {
                id: 17,
                owner: null,
                type: null,
                port: "wood",
                canBuild: [],
                roads: [19, 24, 25]
            },
            {
                id: 18,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [20, 26, 27]
            },
            {
                id: 19,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [21, 28, 29]
            },
            {
                id: 20,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [22, 30, 31]
            },
            {
                id: 21,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [23, 32, 33]
            },
            {
                id: 22,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [24, 34]
            },
            {
                id: 23,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [25, 26, 35]
            },
            {
                id: 24,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [27, 28, 36]
            },
            {
                id: 25,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [29, 30, 37]
            },
            {
                id: 26,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [31, 32, 38]
            },
            {
                id: 27,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [33, 39]
            },
            {
                id: 28,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [34, 40]
            },
            {
                id: 29,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [35, 41, 42]
            },
            {
                id: 30,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [36, 43, 44]
            },
            {
                id: 31,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [37, 45, 46]
            },
            {
                id: 32,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [38, 47, 48]
            },
            {
                id: 33,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [39, 49]
            },
            {
                id: 34,
                owner: null,
                type: null,
                port: "brick",
                canBuild: [],
                roads: [40, 41, 50]
            },
            {
                id: 35,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [42, 43, 51]
            },
            {
                id: 36,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [44, 45, 52]
            },
            {
                id: 37,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [46, 47, 53]
            },
            {
                id: 38,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [48, 49, 54]
            },
            {
                id: 39,
                owner: null,
                type: null,
                port: "brick",
                canBuild: [],
                roads: [50, 55]
            },
            {
                id: 40,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [51, 56, 57]
            },
            {
                id: 41,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [52, 58, 59]
            },
            {
                id: 42,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [53, 60, 61]
            },
            {
                id: 43,
                owner: null,
                type: null,
                port: "sheep",
                canBuild: [],
                roads: [54, 62]
            },
            {
                id: 44,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [55, 56, 63]
            },
            {
                id: 45,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [57, 58, 64]
            },
            {
                id: 46,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [59, 60, 65]
            },
            {
                id: 47,
                owner: null,
                type: null,
                port: "sheep",
                canBuild: [],
                roads: [61, 62,66]
            },
            {
                id: 48,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [63, 67]
            },
            {
                id: 49,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [64, 68, 69]
            },
            {
                id: 50,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [65, 70, 71]
            },
            {
                id: 51,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [66, 72]
            },
            {
                id: 52,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [67, 68]
            },
            {
                id: 53,
                owner: null,
                type: null,
                port: "any",
                canBuild: [],
                roads: [69, 70]
            },
            {
                id: 54,
                owner: null,
                type: null,
                port: null,
                canBuild: [],
                roads: [71, 72]
            }
        ]
    }, 
    reducers: {

    }
})

export const settlements = state => state.settlementNodeSlice.settlements;

export default settlementNodeSlice.reducer;