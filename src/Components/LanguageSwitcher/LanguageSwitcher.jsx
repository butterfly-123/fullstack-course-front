import React from 'react';
import './LanguageSwitcher.css';
import styles from './LanguageSwitcher.module.css';
import LanguageIcons from "../Shared/Icons/Language/LanguageIcons";
import Container from "../Shared/Container/Container";
import {connect} from "react-redux";
import {setLang} from "../../Actions/language";

const languages = ['de', 'pl', 'en'];
const languagesTranslations = {
    de: 'German',
    pl: 'Polish',
    en: 'English'
};

class LanguageSwitcher extends React.Component {
    renderLang(lang) {
        return (
            <li>
                <a href="#">
                    <div
                        className={styles.verticallyAligned}
                        onClick={() => this.props.setLang(lang)}
                    >
                        <div><LanguageIcons country={lang} /></div>
                        <span>{languagesTranslations[lang]}</span>
                    </div>
                </a>
            </li>
        )
    }

    render(lang) {
        const selectedLang = this.props.language.lang;

        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <div className={styles.verticallyAligned}>
                                    <div><LanguageIcons country={lang} /></div>
                                    <span>{languagesTranslations[selectedLang]}</span>
                                </div>
                            </a>
                            <ul>
                                <Container>
                                    {languages.map(lang => this.renderLang(lang))}
                                </Container>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default connect(
    ({language}) => ({language}),
    {setLang}
)(LanguageSwitcher);
