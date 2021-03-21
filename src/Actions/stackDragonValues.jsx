import config from "../config";


export const save = ({ dragonId, nickname, isPublic, saleValue, sireValue }) => dispatch => {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({ dragonId, nickname, isPublic, saleValue, sireValue })
    }

    options.headers['Authorization'] = localStorage.getItem('sessionId');


    fetch(`${config.api}/dragon/update`, options)
        .then(res => res.json())
        .then(json => {

            if (json.type === 'error') {
                dispatch({ type: 'ERROR_SAVE_DRAGON' });
            } else {
                dispatch({ type: 'IS_NOT_EDIT', dragon: json.dragon });
            }
        })
        .catch(error => console.log('ERROR SAVE DRAGON: ' + error.message))
}


// export const save = ({ dragonId, nickname, isPublic, saleValue, sireValue }) => {
//     fetch(`${config.api}/dragon/update`, {
//         method: 'PUT',
//         headers: { 'Content-Type' : 'application/json' },
//         body: JSON.stringify({ dragonId, nickname, isPublic, saleValue, sireValue })
//     })
//         .then(res => res.json())
//         .then(json => {
//             if (json.type === 'error') {
//             }
//         })
//         .catch(error => alert(error.message))
// }

export const updateNickname = (nickname) => dispatch => {
    dispatch({ type: 'STACK_DRAGON_NICKNAME_UPDATED', nickname });
}

export const updateSaleValue = (saleValue) => dispatch => {
    dispatch({ type: 'STACK_DRAGON_SALE_VALUE_UPDATED', saleValue });
}

export const updateSireValue = (sireValue) => dispatch => {
    dispatch({type: 'STACK_DRAGON_SIRE_VALUE_UPDATED', sireValue});
}

export const updateIsPublic = (isPublic) => dispatch => {
    dispatch({type: 'STACK_DRAGON_IS_PUBLIC_UPDATED', isPublic});
}

export const displayEditValue = (dragon) => dispatch => {
    dispatch({ type: 'IS_EDIT', dragon });
}

export const unDisplayEditValue = () => dispatch => {
    dispatch({ type: 'IS_NOT_EDIT' });
}


