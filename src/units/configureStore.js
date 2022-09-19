import { configureStore } from "@reduxjs/toolkit";
import { gameReducer, metaReducer } from "./reducers";

export const store = configureStore({
    reducer: {
        meta: metaReducer,
        game: gameReducer
    }
})