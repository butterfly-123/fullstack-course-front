import React from 'react';
import styles from './LandingPublic.module.css';
import Container from "../../Shared/Container/Container";
import imgPublic from "../../Shared/Icons/Img/Public.png";
import {connect} from "react-redux";
import {translations} from "../../../transaltions";

class LandingPublic extends React.Component {
    render() {
        const selectedLang = this.props.language.lang;

        return (
            <div className={styles.margin}>
                <Container padding={true}>
                    <div className={styles.container}>
                        <div className={styles.landingLogin}>
                            <p className={styles.title}>{translations[selectedLang].PUBLIC}</p>
                            <p className={styles.subTitle}>{translations[selectedLang].TEXT_PUBLIC}</p>
                        </div>
                        <div className={styles.landingLogin}>
                            <img src={imgPublic} alt="Login"></img>
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
)(LandingPublic);
