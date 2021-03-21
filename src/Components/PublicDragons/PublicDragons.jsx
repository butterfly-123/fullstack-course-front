import React from 'react';
import LeftMenu from "../LeftMenu/LeftMenu";
import styles from './PublicDragons.module.css';
import StackDragon from "./StackDragon/StackDragon";
import Header from "../Header/Header";
import { connect } from 'react-redux';
import {fetchPublicDragons} from "../../Actions/publicDragons";
import Container from "../Shared/Container/Container";
import {translations} from "../../transaltions";

class PublicDragons extends React.Component {
    componentDidMount() {
        this.props.fetchPublicDragons();
    }

    render() {
        if(!this.props.account.loggedIn) {
            this.props.history.push('/login');
        }

        console.log('@@@ PUBLIC', this.props)
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
                                <p className={styles.titleContainer}>{translations[selectedLang].DRAGON_PUBLIC}</p>
                            </Container>
                        </div>
                        {
                            this.props.publicDragons.dragons.map(dragon => {
                                return (
                                    <div key={dragon.dragonId}>
                                        <StackDragon dragon={dragon}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default connect(
    ({ publicDragons, language, account }) => ({ publicDragons, language, account }),
    { fetchPublicDragons }
)(PublicDragons);
