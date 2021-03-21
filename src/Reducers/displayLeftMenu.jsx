const initialState = {
    showed: false
};

const displayLeftMenu = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MENU_IN_MOBILE_VIEW':
            return {
                showed: true
            };
        case 'HIDE_MENU_IN_MOBILE_VIEW':
            return {
                showed: false
            };
        default:
            return state;
    }
};

export default displayLeftMenu;