import { configureStore } from "@reduxjs/toolkit";
import { playerSlice } from "../features/players";
import { roadNodeSlice } from "../features/roadNodes";
import { settlementNodeSlice} from "../features/settlementNodeSlice";
import { gameMetaDataSlice } from "../features/gameMetaDataSlice";
import { hexSlice } from "../features/hexSlice";
import { loadState, saveToken } from "../features/localStorage";

export default configureStore({
    reducer: {
        players: playerSlice.reducer,
        road: roadNodeSlice.reducer,
        settlements: settlementNodeSlice.reducer,
        gameData: gameMetaDataSlice.reducer,
        hexes: hexSlice.reducer
    }


});