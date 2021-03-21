import React, { Component } from 'react';
import styles from './IconHamburger.module.css';
import {connect} from "react-redux";

class IconHamburger extends Component {
    changeShow(event) {
        if (event.target.checked) {
            this.props.dispatch({ type: 'SHOW_MENU_IN_MOBILE_VIEW' });
        } else {
            this.props.dispatch({ type: 'HIDE_MENU_IN_MOBILE_VIEW' });
        }
    }

    render() {
        return(
            <div>
                <input
                    className={styles.menuToggle}
                    type="checkbox"
                    onChange={(event) => this.changeShow(event)}
                />
                <label className={styles.menuBtn} htmlFor="menuToggle">
                    <span></span>
                </label>
            </div>
        );
    };
}

export default connect()(IconHamburger);

