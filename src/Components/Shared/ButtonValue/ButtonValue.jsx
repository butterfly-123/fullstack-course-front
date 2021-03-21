import React, { Component } from 'react';
import styles from './ButtonValue.module.css';

class ButtonValue extends Component {
    render() {
        const { onClick, text } = this.props;

        return(
            <button
                onClick={onClick}
                className={styles.buttonValue}
            >
                {text}
            </button>
        );
    };
}

export default ButtonValue;