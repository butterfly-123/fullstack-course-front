import { PUBLIC_DRAGONS } from './types';
import domain from '../config';

export const fetchPublicDragons = () => dispatch => {
    dispatch({ type: PUBLIC_DRAGONS.FETCH });

    console.log('din don di din')

    return fetch(`${domain.api}/dragon/public-dragons`)
        .then(res => res.json())
        .then(json => {
            if (json.types === 'error') {
                dispatch({ type: PUBLIC_DRAGONS.FETCH_ERROR, message: json.message })
            } else {
                dispatch({ type: PUBLIC_DRAGONS.FETCH_SUCCESS, dragons: json.dragons })
            }
        })
        .catch(error => dispatch({ type: PUBLIC_DRAGONS.FETCH_ERROR, message: error.message }));

}