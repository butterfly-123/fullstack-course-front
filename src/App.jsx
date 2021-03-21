import React from 'react';
import './App.css'
import AuthForm from "./Components/AuthForm/AuthForm";
import Header from "./Components/Header/Header";
import {connect} from "react-redux";

class App extends React.Component {
    displayToast() {
        return (
            <div  className={'error-global'}>
                <b>
                    BIG ERROR!!! We cannot do anything
                </b>

                <span
                    className={'error-global-close'}
                    onClick={() => this.props.dispatch({
                        type: 'CLEAR_ERROR'
                    })}
                >X</span>
            </div>
        )
    }

    render() {
        if(this.props.account.loggedIn) {
            this.props.history.push('/home');
        }

        return (
            <div>
                <h1>Test</h1>
                {this.props.error.errorType === 'GLOBAL_ERROR_500' ?
                     this.displayToast(): null
                }
                <Header />
                <AuthForm />
            </div>
        )
    }
}

export default connect(
    ({ account, error }) => ({ account, error }),
    null
)(App);
