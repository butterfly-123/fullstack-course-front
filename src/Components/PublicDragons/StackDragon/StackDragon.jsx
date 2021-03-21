import React from 'react';
import Container from "../../Shared/Container/Container";
import styles from './StackDragon.module.css';
import Button from "../../Shared/Button/Button";
import {translations} from "../../../transaltions";
import {connect} from "react-redux";
import MatingOptions from "../../MatingOptions/MatingOptions";
import config from "../../../config";
import history from "../../../history";
import DragonAvatar from "../../DragonAvatar/DragonAvatar";

class StackDragon extends React.Component {
    state = { displayMatingOptions: true };

    toggleDisplayMatingOptions = () => {
        this.setState({
            displayMatingOptions: !this.state.displayMatingOptions
        });
    }

    buy = () => {
        const { dragonId, saleValue } = this.props.dragon;
        console.log('buy', this.props.dragon)


        fetch(`${config.api}/dragon/buy`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dragonId, saleValue })
        }).then(response => response.json())
            .then(json => {
                if (json.type !== 'error') {
                    history.push('/account-dragons');
                }
            })
            .catch(error => console.log(error.message));
    }

    // displayMatingOptions = () => {
    //     if (!this.props.matingOptions.displayMatingOptions) {
    //         this.props.displayMatingOptions()
    //     } else {
    //         this.props.notDisplayMatingOptions()
    //     }
    // }

    render() {
        const selectedLang = this.props.language.lang;

        return (
            <div className={styles.container}>
                <Container padding={true}>
                    <p className={styles.subtitleContainerName}>{this.props.dragon.nickname}</p>
                    <DragonAvatar dragon={this.props.dragon} />
                    <div className={styles.displayCenter}>
                        <div className={styles.displayFlex}>
                            <p className={styles.subtitleContainer}>{translations[selectedLang].SALE_VALUE}:</p>
                            <p className={styles.subtitleContainerValue}>{this.props.dragon.saleValue}</p>
                        </div>
                        <div className={`${styles.displayFlex} ${styles.hide}`}>
                            <div className={styles.line}>l</div>
                        </div>
                        <div className={styles.displayFlex}>
                            <p className={styles.subtitleContainer}>{translations[selectedLang].SIRE_VALUE}:</p>
                            <p className={styles.subtitleContainerValue}>{this.props.dragon.sireValue}</p>
                        </div>

                        <div className={styles.displayButtonsFlex}>
                            <div className={styles.button}>
                                <Button
                                    text={translations[selectedLang].SIRE}
                                    onClick={this.toggleDisplayMatingOptions}
                                />
                            </div>
                            <div className={`${styles.button} ${styles.marginBottom}`}>
                                <Button
                                    text={translations[selectedLang].BUY}
                                    onClick={this.buy}
                                />
                            </div>
                        </div>
                        {
                            this.state.displayMatingOptions ?
                                <MatingOptions patronDragonId={this.props.dragon.dragonId} /> :
                                null
                        }
                    </div>
                </Container>
            </div>
        )
    }
}

export default connect(
    ({language, matingOptions}) => ({language, matingOptions}),
    null
)(StackDragon);


