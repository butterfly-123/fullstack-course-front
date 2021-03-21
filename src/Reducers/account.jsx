import {ACCOUNT} from "../Actions/types";
import fetchStates from "../Reducers/fetchStates";

const initState = {
    isRightContainerActive: true,
    username: '',
    password: '',
    buttonClicked: true,
    loggedIn: false,
    loading: false,
    errors: [],
    showLanding: false,
    displayMenu: true,
    hideIcon: false
}

const account = (state = initState, action) => {
    switch (action.type) {
        case 'ACCOUNT_FETCH_AUTHENTICATED_SUCCESS':
            return {
                ...state,
                loggedIn: true,
                loading: false,
            };
        case 'DISPLAY_MENU':
            return {
                ...state,
                displayMenu: true,
            };
        case 'HIDE_ICON':
            return {
                ...state,
                hideIcon: true,
            };
        case 'RIGHT_CONTAINER_IS_ACTIVE':
            return {
                ...state,
                isRightContainerActive: true,
            };
        case 'RIGHT_CONTAINER_IS_UN_ACTIVE':
            return {
                ...state,
                isRightContainerActive: false
            };
        case 'SHOW_LANDING':
            return {
                ...state,
                showLanding: true,
            };
        case 'SHOW_NOT_LANDING':
            return {
                ...state,
                showLanding: false
            };
        case 'ACCOUNT_USERNAME':
            return {
                ...state,
                username: action.username
            };
        case 'ACCOUNT_PASSWORD':
            return {
                ...state,
                password: action.password
            };
        case 'ACCOUNT_BUTTON_IS_CLICKED':
            return {
                ...state,
                buttonClicked: true
            };
        case 'ACCOUNT_BUTTON_IS_NOT_CLICKED':
            return {
                ...state,
                buttonClicked: false
            };
        case ACCOUNT.FETCH:
            console.log('ACCOUNT.FETCH:');

            return {
                ...state,
                status: fetchStates.fetching,
                loading: true
            };
        case ACCOUNT.FETCH_ERROR:
            return {
                ...state,
                status: fetchStates.error,
                message: action.message,
                errors: action.errors,
                loading: false
            };
        case ACCOUNT.FETCH_SUCCESS:
            return {
                ...state,
                status: fetchStates.success,
                message: action.message,
                loading: false,
                loggedIn: true
            };
        case ACCOUNT.FETCH_LOGOUT_SUCCESS:
            return {
                ...state,
                status: fetchStates.success,
                message: action.message,
                loggedIn: false,
                loading: false,
            };
        default:
            return state;
    }
};

export default account;
