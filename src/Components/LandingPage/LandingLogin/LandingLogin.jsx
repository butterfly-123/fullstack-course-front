import React from 'react';
import styles from './LandingLogin.module.css';
import Container from "../../Shared/Container/Container";
import imgLogin from "../../Shared/Icons/Img/AuthForm.png";
import {connect} from "react-redux";
import {translations} from "../../../transaltions";

class LandingLogin extends React.Component {
    render() {
        const selectedLang = this.props.language.lang;

        return (
            <Container padding={true}>
                <div className={styles.container}>
                    <div className={styles.landingLogin}>
                        <p className={styles.title}>{translations[selectedLang].LOGIN}</p>
                        <p className={styles.subTitle}>{translations[selectedLang].TEXT_LOGIN_FORM}</p>
                    </div>
                    <div className={styles.landingLogin}>
                        <img src={imgLogin} alt="Login"></img>
                    </div>
                </div>
            </Container>
        )
    }
}

export default connect(
    ({language}) => ({language}),
    null
)(LandingLogin);
