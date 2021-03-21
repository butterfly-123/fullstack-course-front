import React from 'react';
import styles from './AuthForm.module.css';
import Container from "../Shared/Container/Container";
import "./AuthForm.css"
import Login from "../Shared/Icons/Auth/Login";
import Padlock from "../Shared/Icons/Auth/Padlock";
import Button from "../Shared/Button/Button";
import Home from "../Home/Home";
import {connect} from "react-redux";
import {translations} from "../../transaltions";

import {login, signup, updateUsername, updatePassword, setRightContainerActive, setRightContainerUnActive} from "../../Actions/account";

class AuthForm extends React.Component {
    toggleContainer() {
        if (this.props.account.isRightContainerActive) {
            this.props.setRightContainerUnActive();
        } else {
            this.props.setRightContainerActive();
        }
    }

    openHome() {
        return(
            <>
                <Home />
            </>
        )
    }

    updateUsername = event => {
        this.props.updateUsername(event.target.value)
    }

    updatePassword = event => {
        this.props.updatePassword(event.target.value)
    }

    signup() {
        const { username, password } = this.props.account;

        this.props.signup({ username, password });
    }

    login() {
        const { username, password } = this.props.account;

        this.props.login({ username, password });
    }

    shouldLoginError() {
        return this.props.account.errors &&
            this.props.account.errors.includes('USERNAME_OR_PASS_INCORRECT');
    }

    showLoginError() {
        if (this.shouldLoginError()) {
            return <div>
                <span className={styles.tooltipText}>
                    {translations[this.props.language.lang][this.props.account.errors[0]]}
                </span>
            </div>
        }
    }

    shouldShowUserError() {
        return this.props.account.errors &&
            (
                this.props.account.errors.includes('ACCOUNT_USER_ALREADY_EXISTS') ||
                this.props.account.errors.includes('ACCOUNT_TOO_SHORT_USER_NAME')
            );
    }

    showUsernameError() {
        if (this.shouldShowUserError()) {
            return <div>
                {translations[this.props.language.lang][this.props.account.errors[0]]}
            </div>
        }
    }

    shouldShowPassError() {
        return this.props.account.errors &&
            this.props.account.errors.includes('IS_NOT_PASSWORD');
    }

    renderPassError() {
        if (this.shouldShowPassError()) {
            return <span className={styles.tooltipText}>
                {translations[this.props.language.lang].IS_NOT_PASSWORD}
            </span>
        }
    }

    renderSignup() {
        const selectedLang = this.props.language.lang;
         const loading = this.props.account.loading;

        return(
            <>
                <h1>{translations[selectedLang].SIGNUP}</h1>
                <div className={styles.containerInput}>
                    <input
                        className={styles.inputAuth}
                        type='text'
                        placeholder={translations[selectedLang].USERNAME_PLACEHOLDER}
                        value={this.props.account.username}
                        onChange={this.updateUsername}
                    />
                    <div className={styles.line}></div>
                    <Login />
                </div>
                {this.showUsernameError() ? <span className={styles.tooltipText}>{this.showUsernameError()}</span> : ' '}
                <div className={styles.containerInput}>
                    <input
                        className={styles.inputAuth}
                        type='password'
                        placeholder={translations[selectedLang].PASSWORD_PLACEHOLDER}
                        value={this.props.account.password}
                        onChange={this.updatePassword}
                    />
                    <div className={styles.line}></div>
                    <Padlock />
                </div>
                {this.renderPassError()}
                <div className={styles.buttonContainer}>
                    <Button
                        loading={loading}
                        text={translations[selectedLang].SIGNUP}
                        onClick={(e) => {e.preventDefault(); this.signup()}}
                    >{translations[selectedLang].SIGNUP}</Button>
                </div>
            </>
        )
    }

    renderToggleSignup() {
        const selectedLang = this.props.language.lang;

        return(
             <>
                 <div className={styles.hiddenToggleLoginLogup}>
                     <span className={styles.text}>{translations[selectedLang].TEXT_SIGNUP}</span>
                     <div
                         onClick={this.toggleContainer.bind(this)}
                         className={styles.toggleLoginLogup}>
                         <span>{translations[selectedLang].HERE}</span>
                     </div>
                 </div>
             </>
         )
    }

    renderLogin() {
        const selectedLang = this.props.language.lang;
        const loading = this.props.account.loading;

        return(
            <>
                <h1>{translations[selectedLang].LOGIN}</h1>
                {this.showLoginError()}
                <div className={styles.containerInput}>
                    <input
                        className={styles.inputAuth}
                        type='text'
                        placeholder={translations[selectedLang].USERNAME_PLACEHOLDER}
                        value={this.props.account.username}
                        onChange={this.updateUsername}
                    />
                    <div className={styles.line}></div>
                    <Login />
                </div>
                <div className={styles.containerInput}>
                    <input
                        className={styles.inputAuth}
                        type='password'
                        placeholder={translations[selectedLang].PASSWORD_PLACEHOLDER}
                        value={this.props.account.password}
                        onChange={this.updatePassword}
                    />
                    <div className={styles.line}></div>
                    <Padlock />
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        loading={loading}
                        text={translations[selectedLang].LOGIN}
                        className='button-login'
                        onClick={(e) => {e.preventDefault(); this.login()}}
                    ></Button>
                </div>
            </>
        )
    }

    renderToggleLogin() {
        const selectedLang = this.props.language.lang;

        return(
            <>
                <div className={styles.hiddenToggleLoginLogup}>
                    <span className={styles.text}>{translations[selectedLang].TEXT_LOGIN}</span>
                    <div
                        onClick={this.toggleContainer.bind(this)}
                        className={styles.toggleLoginLogup}>
                        <span>{translations[selectedLang].HERE}</span>
                    </div>
                </div>
            </>
        )
    }

    renderOverlay() {
        const selectedLang = this.props.language.lang;

        return(
            <div className={styles.overlayContainer}>
                <div className={styles.overlay}>
                    <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                        <h1>{translations[selectedLang].OVERLAY_TITLE}</h1>
                        <p>{translations[selectedLang].OVERLAY_SUBTITLE}</p>
                        <button
                            onClick={this.toggleContainer.bind(this)}
                            className={styles.buttonContainerPanel} id="logIn">{translations[selectedLang].SIGNUP}</button>
                    </div>
                    <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                        <h1>{translations[selectedLang].OVERLAY_TITLE}</h1>
                        <p>{translations[selectedLang].OVERLAY_SUBTITLE}</p>
                        <button
                            onClick={this.toggleContainer.bind(this)}
                            className={styles.buttonContainerPanel} id="signUp">{translations[selectedLang].LOGIN}</button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const isRight = !this.props.account.isRightContainerActive;

        return (
            <div className={styles.container}>
                <Container block={true}>
                    <div className={isRight ? `${styles.containerAuthForm} ${styles.rightPanelActive}` : `${styles.containerAuthForm}`}>
                        <div
                            className={isRight ? `${styles.containerAuthFormForm} ${styles.signUpContainer}` : `${styles.signUpContainerHidden}`}
                        >
                            <form>
                                {this.renderSignup()}
                                {this.renderToggleLogin()}
                            </form>
                        </div>

                        <div className={`${styles.containerAuthFormForm} ${styles.signInContainer}`}>
                            <form>
                                {this.renderLogin()}
                                {this.renderToggleSignup()}
                            </form>
                        </div>
                        {this.renderOverlay()}
                    </div>
                </Container>
            </div>
        )
    }
}

export default connect(
    ({account, language, counter}) => ({account, language, counter}),
    {login, signup, updateUsername, updatePassword, setRightContainerActive, setRightContainerUnActive}
)(AuthForm);

// const dis = (arg2) => {
//     return arg2;
// }
//
// const fn1 = (arg1) => dis => {
//     return arg1;
// };
//
// console.log(
//     '@@@@@@@@@@@@TEST',
//     {'fn1': fn1},
//     {'fn1()': fn1('1')},
//     {'fn1()()': fn1('1')('2')}
// );