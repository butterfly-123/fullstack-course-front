import { PUBLIC_DRAGONS } from "../Actions/types";
import fetchStates from "./fetchStates";

const DEFAULT_PUBLIC_DRAGONS = { dragons: [] };

const publicDragons = (state = DEFAULT_PUBLIC_DRAGONS, action) => {
    switch (action.type) {
        case PUBLIC_DRAGONS.FETCH:
            return {...state, status: fetchStates.fetching}
        case PUBLIC_DRAGONS.FETCH_ERROR:
            return {...state, status: fetchStates.error, message: action.message}
        case PUBLIC_DRAGONS.FETCH_SUCCESS:
            const newState = {...state, status: fetchStates.success, dragons: action.dragons};

            console.log('newState', newState)

            return newState
        default:
            return state;
    }
};

export default publicDragons;