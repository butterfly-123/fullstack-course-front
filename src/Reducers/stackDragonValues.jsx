const initState = {
    nickname: '',
    saleValue: '',
    sireValue: '',
    isPublic: '',
    edit: false
}

const stackDragonValues = (state = initState, action) => {

    // const state = {
    //     nickname: 'kris'
    // };
    //
    // const newState = {...state};
    // const anotherNewState = state;
    //
    // state.nickname = 'A';

    //newState.nickname => 'k'
    //state.nickname => 'A'
    //anotherNewState.nickname = 'A'

    //newState.nickname = '1';
    //newState.nickname => '1'
    //state.nickname => 'A'
    //anotherNewState.nickname = 'A'


    switch (action.type) {
        case 'STACK_DRAGON_NICKNAME_UPDATED':
            return {
                ...state,
                nickname: action.nickname
            };
        case 'STACK_DRAGON_SALE_VALUE_UPDATED':
            return {
                ...state,
                saleValue: action.saleValue
            };
        case 'STACK_DRAGON_SIRE_VALUE_UPDATED':
            return {
                ...state,
                sireValue: action.sireValue
            };
        case 'STACK_DRAGON_IS_PUBLIC_UPDATED':
            return {
                ...state,
                isPublic: action.isPublic
            };
        case 'IS_EDIT':
            return {
                ...state,
                nickname: action.dragon.nickname,
                saleValue: action.dragon.saleValue,
                sireValue: action.dragon.sireValue,
                isPublic: action.dragon.isPublic,
                edit: true
            };
        case 'IS_NOT_EDIT':
            return {
                ...state,
                edit: false
            };
        default:
            return state;
    }
};

export default stackDragonValues;
