import { createSlice } from "@reduxjs/toolkit";

export const hexSlice = createSlice({
    name: "hexData",
    initialState: {
        hex_list: [
            {
                id: 1,
                number: 0,
                resource: "",
                robber: false
            }, 
            {
                id: 2,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 3,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 4,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 5,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 6,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 7,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 8,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 9,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 10,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 11,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 12,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 13,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 14,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 15,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 16,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 17,
                number: 0,
                resource: "",
                robber: false
            },
            {
                id: 18,
                number: 0,
                resource: "",
                robber: false
            }, 
            {
                id: 19,
                number: 0,
                resource: "dessert",
                robber: true
            }
        ]
    },
    reducers: {
        setNumber: (state, action) => {
            state.number = action.payload;
        }, 
        setResource: (state, action) => {
            state.resource = action.payload;
        }, 
        setRobber: (state, action) => {
            state.robber = !state.robber
        } 
    }
})

export const { setNumber } = hexSlice.actions;

export const hexes = state => state.hexes.hex_list;

export default hexSlice.reducer;