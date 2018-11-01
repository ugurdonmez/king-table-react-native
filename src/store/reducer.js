const initialState = {
    players: ['Ugur', 'Ahmet', 'Ali', 'Ayse'],
    hands: [],
}

const reducer = (state = initialState, action) => {

    if (action.type === 'PLAYER_NAME_UPDATE') {
        const players = { ...state.players }
        players[action.payload.index] = action.payload.name

        return {
            ...state,
            players,
        }
    }

    if (action.type === 'ENTER_HAND_VALUE') {
        const hands = state.hands

        hands.push(action.payload.hand)

        return {
            ...state,
            hands,
        }
    }

    return state;
}

export default reducer;