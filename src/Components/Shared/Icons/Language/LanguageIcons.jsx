import React from 'react';
import styles from './LanguageIcons.module.css';

import imgDe from "./de.png";
import imgPl from "./pl.png";
import imgUSA from "./USA.png";
import {connect} from "react-redux";

const paths = {
    de: imgDe,
    pl: imgPl,
    en: imgUSA
}

class LanguageIcons extends React.Component {
    render() {
        const selectedLang = this.props.language.lang;

        let path = paths[this.props.country];

        if (!path) {
            path = paths[selectedLang];
        }

        return (
            <div className={styles.languageIcons}>
                <img
                    src={path}>
                </img>
            </div>
        )
    }
}

export default connect(
    ({ language }) => ({ language }),
    null
)(LanguageIcons);
