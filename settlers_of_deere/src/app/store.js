import { configureStore } from "@reduxjs/toolkit";
import { playerSlice } from "../features/players";
import { roadNodeSlice } from "../features/roadNodes";
import { settlementNodeSlice} from "../features/settlementNodeSlice";


export default configureStore({
    reducer: {
        players: playerSlice.reducer,
        road: roadNodeSlice.reducer,
        settlements: settlementNodeSlice.reducer
    }
});