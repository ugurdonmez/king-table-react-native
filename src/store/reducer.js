const initialState = {
    players: ['Ugur', '', '','']
}

const reducer = (state = initialState, action) => {

    if (action.type === 'PLAYER_NAME_UPDATE') {
        const players = { ...state.players }
        players[action.payload.index] = action.payload.name

        return {
            ...state,
            players
        }
    }

    return state;
}

export default reducer;