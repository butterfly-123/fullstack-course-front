import React from 'react';
import styles from './LeftMenu.module.css';
import Container from "../Shared/Container/Container";
import IconHome from "../Shared/Icons/Home/Home";
import IconUser from "../Shared/Icons/Home/User";
import IconPublic from "../Shared/Icons/Home/Public";
import {connect} from "react-redux";
import {translations} from "../../transaltions";
import ReturnMenu from "../Menu/ReturnMenu";
import {fetchAccountInfo} from "../../Actions/accountInfo";
import {hideMenu} from "../../Actions/displayLeftMenu";


class LeftMenu extends React.Component {
    componentDidMount() {
        this.props.fetchAccountInfo();
    }

    hideMenu() {
        return(
            this.props.hideMenu()
        )
    }

    render() {

        const showed = this.props.displayLeftMenu.showed;
        const classMainDiv = showed === true ? `${styles.containerDisplayLeft}` : `${styles.containerDisplayLeftNo}`;
        const selectedLang = this.props.language.lang;

        return (
        <div className={classMainDiv + ` ${styles.containerDisplayLeftNoMobile}`}>
            <Container totalHigh={true} padding={true}>
                <div className={styles.titleLeftContainer}>
                    <h2>{this.props.accountInfo ? this.props.accountInfo.username : null}</h2>
                    <span>{translations[selectedLang].BALANCE}: </span>
                    <span className={styles.accountBalance}>{this.props.accountInfo ? this.props.accountInfo.balance : null}</span>
                    <span> Euro</span>
                </div>
                <div className={styles.line}></div>
                <div className={styles.menuLeftContainer}>
                    <p>{translations[selectedLang].PAGES}</p>
                    <div className={styles.iconLeftContainer}>
                        <IconHome />
                        <ReturnMenu
                            onClick={() => this.props.hideMenu()}
                            link='/home'
                            name={translations[selectedLang].HOME}
                        />
                    </div>
                    <div className={styles.iconLeftContainer}>
                        <IconUser />
                        <ReturnMenu
                            onClick={() => this.props.hideMenu()}
                            link='/account-dragons'
                            name={translations[selectedLang].ACCOUNT_DRAGON}
                        />
                    </div>
                    <div className={styles.iconLeftContainer}>
                        <IconPublic />
                        <ReturnMenu
                            onClick={() => this.props.hideMenu()}
                            link='/public-dragons'
                            name={translations[selectedLang].DRAGON_PUBLIC}
                        />
                    </div>
                </div>
            </Container>
            </div>

        )
    }
}

export default connect(
    ({accountInfo, language, displayLeftMenu}) => ({accountInfo, language, displayLeftMenu}),
    { fetchAccountInfo, hideMenu }
)(LeftMenu);
