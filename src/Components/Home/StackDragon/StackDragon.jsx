import React, { Component } from 'react';
import styles from './StackDragon.module.css';
import Container from "../../Shared/Container/Container";
import { connect } from 'react-redux';
import { fetchGeneration } from '../../../Actions/generation';
import fetchStates from "../../../Reducers/fetchStates";
import {translations} from "../../../transaltions";
import Button from "../../Shared/Button/Button";

const NIM_DELAY = 3000;

class StackDragon extends Component {
    timer = null;

    componentDidMount() {
        this.fetchNextGeneration();
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    fetchNextGeneration = () => {
        let delay = new Date(this.props.generation.expiration).getTime() - new Date().getTime();

        if (delay < NIM_DELAY) {
            delay = NIM_DELAY
        }

        this.timer = setTimeout(() => this.props.fetchGeneration(), delay);
    };

    renderGeneration() {
        const selectedLang = this.props.language.lang;
        const { generation } = this.props;

        return(
            <div className={styles.displayFlex}>
                <p className={styles.subtitleContainer}>{translations[selectedLang].GENERATION}:</p>
                <p className={`${styles.subtitleContainer} ${styles.space}`}>{generation.generationId.id}</p>
            </div>
        )
    }

    renderData() {
        const selectedLang = this.props.language.lang;
        const { generation } = this.props;

        return(
            <div className={styles.displayFlex}>
                <p className={styles.subtitleContainer}>{translations[selectedLang].DATA}:</p>
                <p className={`${styles.subtitleContainer} ${styles.space}`}>{(new Date(generation.expiration)).toDateString()}</p>
            </div>
        )
    }

    render() {
        const { generation } = this.props;
        const selectedLang = this.props.language.lang;

        if (generation.status === fetchStates.fetching) {
            return <div>...</div>;
        }

        if (generation.status === fetchStates.error) {
            return <div>{generation.message }</div>;
        }

        return(
            <div className={styles.container}>
                <Container padding={true}>
                    <p className={styles.titleContainer}>{translations[selectedLang].DRAGON_STACK}</p>
                        {generation ?
                            <>
                                {this.renderGeneration()}
                                {this.renderData()}
                            </>
                            :
                            <p><b>No generation</b></p>
                        }
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const generation = state.generation;
    const language = state.language;

    return { generation, language };
};

const componentConnector = connect(
    mapStateToProps,
    { fetchGeneration }
);

export default componentConnector(StackDragon);




