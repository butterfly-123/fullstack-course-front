import React from 'react';
import LeftMenu from "../LeftMenu/LeftMenu";
import NewDragon from "./NewDragon/NewDragon";
import styles from './Home.module.css';
import StackDragon from "./StackDragon/StackDragon";
import Container from "../Shared/Container/Container";
import {translations} from "../../transaltions";
import {connect} from "react-redux";
import Header from "../Header/Header";

class Home extends React.Component {
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
                            <LeftMenu />
                        </div>
                    </div>
                    <div className={`${styles.displayBlock} ${styles.leftBox}`}>
                        <div className={styles.containerTittle}>
                            <Container padding={true}>
                                <p className={styles.titleContainer}>{translations[selectedLang].HOME}</p>
                            </Container>
                        </div>
                        <NewDragon />
                        <StackDragon />
                    </div>
                </div>
            </>
        )
    }
}

export default connect(
    ({language, account}) => ({language, account}),
    null
)(Home);

