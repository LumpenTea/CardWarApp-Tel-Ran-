import { createSlice } from "@reduxjs/toolkit"
import { cards, cardsDeal } from "./constants"

const initialState = {
    meta: {
        user: ''
    },
    game: {
        cardCounter: 0,
        playerCard: null,
        computerCard: null,
        computerResult: 0,
        playerResult: 0,
        resultWord: '',
        page: '/game'
    }
}

const metaSlice = createSlice({
    name: 'meta',
    initialState: initialState.meta,
    reducers: {
        page(state, action) { state.page = action.payload },
        user(state, action) { state.user = action.payload }
    }
})

const gameSlice = createSlice({
    name: 'game',
    initialState: initialState.game,
    reducers: {
        nextCard(state) {
            if (state.cardCounter < cards.player.length - 1) {
                state.page = state.cardCounter === 24 ? '/finish' : '/game';
                const { playerCard, computerCard } = state;

                state.cardCounter = state.cardCounter + 1;
                state.playerCard = cards.player[state.cardCounter];
                state.computerCard = cards.computer[state.cardCounter];

                if (playerCard.number > computerCard.number) state.playerResult++;
                else if (playerCard.number < computerCard.number) state.computerResult++;

            } else {
                state.cardCounter = 0;
            }
        },
        winCheck(state) {
            state.page = '/game';
            if (state.computerResult > state.playerResult) state.resultWord = 'Lose';
            else if (state.computerResult < state.playerResult) state.resultWord = 'Win';
            else state.resultWord = 'Draw';
        },
        gameStart(state) {
            cardsDeal();
            state.playerCard = cards.player[0];
            state.computerCard = cards.computer[0];
            state.computerResult = 0;
            state.playerResult = 0;
        }
    }
})

export const { page, user } = metaSlice.actions;
export const { nextCard, winCheck, gameStart } = gameSlice.actions;

export const metaReducer = metaSlice.reducer;
export const gameReducer = gameSlice.reducer;