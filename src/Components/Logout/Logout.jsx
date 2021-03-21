import React from 'react';
import styles from './Logout.module.css';
import LogoutIcon from "../Shared/Icons/Logout/Logout";
import {logout} from "../../Actions/account";
import {connect} from "react-redux";
import {translations} from "../../transaltions";

class Logout extends React.Component {
    logout() {
        this.props.logout();
    }

    render() {
        const selectedLang = this.props.language.lang;

        return (
            <div>
                <div className={styles.verticallyAligned}>
                    <div><LogoutIcon /></div>
                    <span onClick={() => this.logout()}>{translations[selectedLang].LOGOUT}</span>
                </div>
            </div>

        )
    }
}

export default connect(
    state => state,
    { logout }
)(Logout);


