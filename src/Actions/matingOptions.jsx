import config from "../config";
import history from "../history";

export const mate = ({ matronDragonId, patronDragonId }) => () => {
    fetch(`${config.api}/dragon/mate`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matronDragonId, patronDragonId })
    }).then(response => response.json())
        .then(json => {

            if (json.type !== 'error') {
                history.push('/account-dragons');
            }
        })
        .catch(error => console.log(error.message));
}

export const displayMatingOptions = () => dispatch => {
    dispatch({ type: 'DISPLAY_MATING_OPTIONS' });
}

export const notDisplayMatingOptions = () => dispatch => {
    dispatch({ type: 'NOT_DISPLAY_MATING_OPTIONS' });
}