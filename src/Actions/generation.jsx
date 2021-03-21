import { GENERATION } from './types';
import domain from '../config';

export const fetchGeneration = () => dispatch => {
    dispatch({ type: GENERATION.FETCH })

    const options = {
        credentials: 'include',
        headers: {}
    }

    options.headers['Authorization'] = localStorage.getItem('sessionId');

    return fetch(`${domain.api}/generation`, options)
        .then(res => res.json())
        .then(json => {
            if (json.type === 'error') {
                dispatch({
                    type: GENERATION.FETCH_ERROR,
                    message: json.message
                })
            } else {
                dispatch({
                    type: GENERATION.FETCH_SUCCESS,
                    generation: json.generation
                })
            }
        })
        .catch(error =>
            dispatch({
                type: GENERATION.FETCH_ERROR,
                message: error.message
        })) ;
}
