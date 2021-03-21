const initialState = {
    displayMatingOptions: false
};

const matingOptions = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY_MATING_OPTIONS':
            return {
                displayMatingOptions: true
            };
        case 'NOT_DISPLAY_MATING_OPTIONS':
            return {
                displayMatingOptions: false
            };
        default:
            return state;
    }
};

export default matingOptions;