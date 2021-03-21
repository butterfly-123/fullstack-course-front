import { LANGUAGE } from './types';

export const setLang = (lang) => dispatch => {
    dispatch({type: LANGUAGE.SET, lang})
}
