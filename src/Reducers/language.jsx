import { LANGUAGE } from "../Actions/types";

const DEFAULT_STATE = { lang: 'pl' };

const languages = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case LANGUAGE.SET:
            return { lang: action.lang };
        default:
            return state;
    }
}

export default languages;
