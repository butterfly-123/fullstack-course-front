const initState = {
}

const account = (state = initState, action) => {
    switch (action.type) {
        case 'GLOBAL_ERROR':
            console.log('GLOBAL_ERROR')

            return {
                errors: [],
                errorType: 'GLOBAL_ERROR_500'
            };
        case 'CLEAR_ERROR':
            console.log('CLEAR_ERROR')

            return {
            };
        default:
            return state;
    }
};

export default account;
