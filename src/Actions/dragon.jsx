import { DRAGON } from './types';
import domain from '../config';

export const fetchDragon = () => dispatch => {
    dispatch({ type: DRAGON.FETCH })

    return fetch(`${domain.api}/dragon/new`, {
        credentials: 'include'
    })
        .then(res => res.json())
        .then(json => {
            if (json.type === 'error') {
                dispatch({
                    type: DRAGON.FETCH_ERROR,
                    message: 'ERROR'
                })
            } else {
                const action = {
                    type: DRAGON.FETCH_SUCCESS,
                    dragon: json.dragon
                };

                dispatch(action);
            }
        })
        .catch(error =>
            dispatch({
                type: DRAGON.FETCH_ERROR,
                message: error.message
            })) ;
}


