import React from 'react';
import styles from './LandingHome.module.css';
import Container from "../../Shared/Container/Container";
import imgHome from "../../Shared/Icons/Img/Home.png";
import {connect} from "react-redux";
import {translations} from "../../../transaltions";

class LandingHome extends React.Component {
    render() {
        const selectedLang = this.props.language.lang;

        return (
            <div className={styles.margin}>
                <Container padding={true}>
                    <div className={styles.container}>
                        <div className={styles.landingLogin}>
                            <p className={styles.title}>{translations[selectedLang].HOME}</p>
                            <p className={styles.subTitle}>{translations[selectedLang].TEXT_HOME}</p>
                        </div>
                        <div className={styles.landingLogin}>
                            <img src={imgHome} alt="Login"></img>
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
)(LandingHome);
