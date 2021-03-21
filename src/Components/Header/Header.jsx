import React from 'react';
import styles from './Header.module.css';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Container from "../Shared/Container/Container";
import Logout from "../Logout/Logout";
import IconHamburger from "../Shared/IconHamburger/IconHamburger";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import dragonIcon from '../Shared/Icons/Img/dragon-icon.png';
import {displayMenu} from "../../Actions/account";

class Header extends React.Component {
    render() {
        return (
            <Container padding={true}>
                <div
                    className={styles.iconLeft}>
                    <Link to={'/'}>
                        <img
                            className={styles.logo}
                            src={dragonIcon}
                        />
                    </Link>
                </div>
                {this.props.account.loggedIn ?
                    <div className={styles.iconMenu}>
                        <IconHamburger />
                    </div>
                    :
                    null
                }

                <div className={styles.containerDisplayRight}>
                    <LanguageSwitcher />
                        {this.props.account.loggedIn
                            ?
                                <Logout />
                            :
                                null
                        }
                </div>
            </Container>
        )
    }
}

export default connect(
    ({ account }) => ({ account }),
    {displayMenu}
)(Header);
