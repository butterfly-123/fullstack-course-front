import React from 'react';
import styles from './Popup.module.css';
import Button from "../Shared/Button/Button";
import Header from "../Header/Header";
import {translations} from "../../transaltions";
import {connect} from "react-redux";
import {fetchPublicDragons} from "../../Actions/publicDragons";

class Popup extends React.Component {
    render() {
        const selectedLang = this.props.language.lang;

        return (
            <div className={styles.popup}>
                <Header />
                <div className={styles.popupInner}>
                    <p className={styles.title}>{translations[selectedLang].DRAGONS_PROGRAM}</p>
                    <p className={styles.text}>{translations[selectedLang].TEXT_POPUP}</p>
                    <div className={styles.button}>
                        <Button
                            text={translations[selectedLang].CLOSE}
                            onClick={this.props.closePopup}>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    ({ language }) => ({ language }),
    null
)(Popup);