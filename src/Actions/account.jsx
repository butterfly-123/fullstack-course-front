import { ACCOUNT } from './types';
import domain from '../config';

export const updateUsername = (username) => dispatch => {
    dispatch({ type: 'ACCOUNT_USERNAME', username });
}

export const updatePassword = (password) => dispatch => {
    dispatch({ type: 'ACCOUNT_PASSWORD', password });
}

export const setRightContainerActive = () => dispatch => {
    dispatch({type: 'RIGHT_CONTAINER_IS_ACTIVE'});
}

export const setRightContainerUnActive = () => dispatch => {
    dispatch({type: 'RIGHT_CONTAINER_IS_UN_ACTIVE'});
}

export const showLanding = () => dispatch => {
    dispatch({type: 'SHOW_LANDING'});
}

export const displayMenu = () => dispatch => {
    dispatch({type: 'DISPLAY_MENU'});
}

export const hideIcon = () => dispatch => {
    dispatch({type: 'HIDE_ICON'});
}


export const fetchFromAccount = ({
     endpoint,
     options,
     FETCH_TYPE,
     ERROR_TYPE,
     SUCCESS_TYPE
 }) => dispatch => {
    dispatch({ type: FETCH_TYPE });

    if (!options.headers) {
        options.headers = {}
    }
    options.headers['Authorization'] = localStorage.getItem('sessionId');
    return fetch(`${domain.api}/account/${endpoint}`, options)
        .then(res => {
            if (res.status === 500) {
                return  dispatch({
                    type: 'GLOBAL_ERROR',
                    message: res.statusText,
                    errors: []
                });
            }

            return res.json()
        })
        .then(json => {
            if (json.type === 'error') {
                dispatch({
                    type: ERROR_TYPE,
                    message: json.message,
                    errors: json.errors
                });
            } else {
                if (endpoint === 'login' || endpoint === 'signup') {
                    localStorage.setItem('sessionId', json.sessionId);
                    // Save to local storage for now
                }
                console.log(json);


                dispatch({
                    type: SUCCESS_TYPE,
                    ...json
                });
            }
        })
        .catch(error => {
            dispatch({
                type: ERROR_TYPE,
                message: '',
                errors: []
            });

            dispatch({
                type: 'GLOBAL_ERROR',
                message: error.message,
                errors: []
            });
        });
}

export const signup = ({ username, password }) => fetchFromAccount ({
    endpoint: 'signup',
    options: {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json'},
        credentials: 'include'
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_SUCCESS
});

export const logout = () => fetchFromAccount ({
    endpoint: 'logout',
    options: {
        credentials: 'include',
        headers: {}
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_LOGOUT_SUCCESS
});

export const login = ({ username, password }) => fetchFromAccount ({
    endpoint: 'login',
    options: {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json'},
        credentials: 'include'
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_SUCCESS
});

export const authenticated = () => fetchFromAccount ({
    endpoint: 'authenticated',
    options: {
        credentials: 'include',
        headers: {}
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: 'ACCOUNT_FETCH_AUTHENTICATED_SUCCESS'
});
