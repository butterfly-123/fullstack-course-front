import React from 'react';
import styles from './LandingDragons.module.css';
import Container from "../../Shared/Container/Container";
import imgDragons from "../../Shared/Icons/Img/Account.png";
import {connect} from "react-redux";
import {translations} from "../../../transaltions";

class LandingDragons extends React.Component {
    render() {
        const selectedLang = this.props.language.lang;

        return (
            <div className={styles.margin}>
                <Container padding={true}>
                    <div className={styles.container}>
                        <div className={styles.landingLogin}>
                            <p className={styles.title}>{translations[selectedLang].ACCOUNT_DRAGON}</p>
                            <p className={styles.subTitle}>{translations[selectedLang].TEXT_DRAGONS}</p>
                        </div>
                        <div className={styles.landingLogin}>
                            <img src={imgDragons} alt="Login"></img>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default connect(
    ({language}) => ({language}),
    null
)(LandingDragons);