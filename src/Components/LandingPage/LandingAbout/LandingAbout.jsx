import React from 'react';
import styles from './LandingAbout.module.css';
import {translations} from "../../../transaltions";
import {connect} from "react-redux";

class LandingAbout extends React.Component {
    render() {
        const selectedLang = this.props.language.lang;

        return (
            <div className={styles.container}>
                <p className={styles.title}>{translations[selectedLang].ABOUT}</p>
                <p className={styles.subTitle}>{translations[selectedLang].TEXT_ABOUT}</p>
            </div>
        )
    }
}

export default connect(
    ({language}) => ({language}),
    null
)(LandingAbout);

