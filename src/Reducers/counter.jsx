const initState = {
    counter: 0
}

const account = (state = initState, action) => {
    switch (action.type) {
        case 'COUNTER_UP':
            // return {
            //     counter: state.counter + 1
            // };


            let howMuchToAdd = 1;
            if (action.howMuchToAdd > 0) {
                howMuchToAdd = parseInt(action.howMuchToAdd);
            }


            return {
                counter: parseInt(state.counter) + parseInt(howMuchToAdd)
            };
        case 'COUNTER_DOWN':
            return {
                counter: state.counter - 1
            };
        default:
            return state;
    }
};

export default account;
