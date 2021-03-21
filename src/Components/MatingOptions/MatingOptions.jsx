import React, { Component } from 'react';
import styles from './MatingOptions.module.css';
import { connect } from 'react-redux';
import {translations} from "../../transaltions";
import config from "../../config";
import history from "../../history";

class MatingOptions extends Component {
    mate = ({ matronDragonId, patronDragonId }) => () => {
        fetch(`${config.api}/dragon/mate`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ matronDragonId, patronDragonId })
        }).then(response => response.json())
            .then(json => {
                console.log(json.message);

                if (json.type !== 'error') {
                    history.push('/account-dragons');
                }
            })
            .catch(error => console.log(error.message));
    }

    render() {
        const selectedLang = this.props.language.lang;

        return (
            <div>
                <p>{translations[selectedLang].TEXT}:</p>
                {
                    this.props.accountDragons.dragons.map(dragon => {
                        const { dragonId, generationId, nickname } = dragon;

                        return (
                            <div
                                className={styles.buttonValue}
                            >
                                <button
                                    className={styles.button}
                                    key={dragonId}
                                    onClick={
                                        this.mate({
                                            patronDragonId: this.props.patronDragonId,
                                            matronDragonId: dragon.dragonId
                                        })
                                    }>
                                    <span>G {generationId}.I {dragonId}. {nickname}</span>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(
    ({ accountDragons, language }) => ({ accountDragons, language }),
    null
)(MatingOptions);