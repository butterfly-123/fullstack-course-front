import React from 'react';
import LeftMenu from "../LeftMenu/LeftMenu";
import styles from './AccountDragons.module.css';
import StackDragon from "./StackDragon/StackDragon";
import { fetchAccountDragons } from '../../Actions/accountDragons';
import Header from "../Header/Header";
import {connect} from "react-redux";
import Container from "../Shared/Container/Container";
import {translations} from "../../transaltions";

class AccountDragons extends React.Component {
    componentDidMount() {
        this.props.fetchAccountDragons();
    }

    render() {
        if(!this.props.account.loggedIn) {
            this.props.history.push('/login');
        }

        const selectedLang = this.props.language.lang;

        return (
            <>
                <Header />
                <div className={styles.container}>
                    <div className={`${styles.container} ${styles.hidden} ${styles.rightBox} ${styles.rightBoxMobile}`}>
                        <div className={styles.hidden}>
                            <LeftMenu  />
                        </div>
                    </div>
                    <div className={`${styles.displayBlock} ${styles.leftBox}`}>
                        <div className={styles.containerTittle}>
                            <Container padding={true}>
                                <p className={styles.titleContainer}>{translations[selectedLang].ACCOUNT_DRAGON}</p>
                            </Container>
                        </div>
                        {
                            this.props.accountDragons.dragons.map(dragon => {
                                return (
                                    <div key={dragon.dragonId}>
                                        <StackDragon dragon={dragon}/>
                                    </div>
                                )
                            })
                        }
                        {/*<div className={styles.containerTittle}>*/}
                        {/*    <Container padding={true}>*/}
                        {/*        <p className={styles.titleContainer}>{translations[selectedLang].NO_DRAGONS}</p>*/}
                        {/*    </Container>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </>
        )
    }
}

export default connect(
    ({ accountDragons, language, account }) => ({ accountDragons, language, account }),
    { fetchAccountDragons }
)(AccountDragons);
