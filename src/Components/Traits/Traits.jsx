import React, { Component } from 'react';
import styles from './Traits.module.css';
import ButtonValue from "../Shared/ButtonValue/ButtonValue";
import {translations} from "../../transaltions";
import {connect} from "react-redux";


class Traits extends Component {

    renderTrait(trait) {
        const selectedLang = this.props.language.lang;
        const text = translations[selectedLang][trait.traitValue.toUpperCase()];

        return (
            <div>
                <ButtonValue
                    text={text}
                />
            </div>
        )
    }

    render() {
        const { traits } = this.props;

        return(
            <div className={styles.buttonValue}>
                {traits.map(trait => this.renderTrait(trait))}
            </div>
        )
    }
}

export default connect(
    ({language}) => ({language}),
    null
)(Traits);