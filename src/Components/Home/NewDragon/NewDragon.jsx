import React from 'react';
import Container from "../../Shared/Container/Container";
import styles from './NewDragon.module.css';
import Button from '../../Shared/Button/Button';
import {translations} from "../../../transaltions";
import {connect} from "react-redux";
import {fetchDragon} from '../../../Actions/dragon';
import Traits from "../../Traits/Traits";
import DragonAvatar from "../../DragonAvatar/DragonAvatar";

class NewDragon extends React.Component {
    renderValueNewDragon() {
        return(
            <>
                <p className={styles.titleContainer}>{this.props.dragon.nickname}</p>
                <p className={styles.subtitleContainer}>{this.props.dragon.dragonId}</p>
                <DragonAvatar traits={this.props.dragon.traits} />
                <Traits traits={this.props.dragon.traits} />
            </>
        )
    }

    renderButtonNewDragon() {
        const selectedLang = this.props.language.lang;

        return(
            <div className={styles.button}>
                <Button
                    text={translations[selectedLang].NEW_DRAGON}
                    onClick={() => this.props.fetchDragon()}
                />
            </div>
        )
    }
    render() {
        return (
            <div className={styles.container}>
                <Container padding={true}>
                    {this.renderButtonNewDragon()}
                    {this.renderValueNewDragon()}
                </Container>
            </div>
        )
    }
}

export default connect(
    ({language, dragon}) => ({language, dragon}),
    { fetchDragon }
)(NewDragon);



