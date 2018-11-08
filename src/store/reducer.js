import { AsyncStorage } from 'react-native';

const initialState = {
    players: ['Ugur', 'Ahmet', 'Ali', 'Ayse'],
    hands: [],
    // koz, el, erkek, kiz, kupa, rifki, son
    playedHands: [0,0,0,0,0,0,0],
    // reward, punish
    playersHands: [
        [0,0],
        [0,0],
        [0,0],
        [0,0],
    ],
}

const reducer = (state = initialState, action) => {

    if (action.type === 'PLAYER_NAME_UPDATE') {
        const players = { ...state.players };
        players[action.payload.index] = action.payload.name;

        AsyncStorage.setItem('players', players);

        return {
            ...state,
            players,
        };
    }

    if (action.type === 'ENTER_HAND_VALUE') {
        const hands = state.hands;
        hands.push(action.payload.hand);

        AsyncStorage.setItem('hands', hands);

        return {
            ...state,
            hands,
        };
    }

    if (action.type === 'ENTER_PLAYER_HAND') {
        const playersHands = { ...state.playersHands };

        playersHands[action.payload.index][action.payload.handType]++;

        AsyncStorage.setItem('playerHands', playersHands);

        return {
            ...state,
            playersHands,
        };
    }

    if (action.type === 'INCREASE_PLAYED_HAND') {
        const playedHands = { ...state.playedHands };
        playedHands[action.payload.index]++;

        AsyncStorage.setItem('playedHands', playedHands);
        
        return {
            ...state,
            playedHands,
        };
    }

    return state;
}

export default reducer;