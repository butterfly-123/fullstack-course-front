import { DRAGON } from '../Actions/types';
import fetchStates from "./fetchStates";

const DEFAULT_DRAGON = {
    generationId: {id: ''},
    dragonId: '',
    nickname: '',
    birthdate: '',
    traits: []
};

const dragonReducer = (state = DEFAULT_DRAGON, action) => {
    switch (action.type) {
        case DRAGON.FETCH:
            return { ...state, status: fetchStates.fetching };
        case DRAGON.FETCH_ERROR:
            return { ...state, status: fetchStates.error, message: action.message };
        case DRAGON.FETCH_SUCCESS:
            const reduced = { ...state, status: fetchStates.success, ...action.dragon };
            return reduced;
        default:
            return state;
    };
};

export default dragonReducer;