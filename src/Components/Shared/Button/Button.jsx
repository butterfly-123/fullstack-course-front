import React, { Component } from 'react';
import styles from './Button.module.css';
import gif from './Ellipsis-1s-200px (2).gif';


class Button extends Component {
    render() {
        const { onClick, text, loading } = this.props;
        const img = <img
            className={styles.gif}
            src={gif}
        />

        return(
            <button
                onClick={onClick}
                className={styles.button}
            >
                {loading ? img : text}
            </button>
        );
    };
}

export default Button;