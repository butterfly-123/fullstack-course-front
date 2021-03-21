import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import displayLeftMenu from './Reducers/displayLeftMenu';
import stackDragonValues from './Reducers/stackDragonValues';
import account from './Reducers/account';
import accountInfo from './Reducers/accountInfo';
import history from "../src/history";
import accountDragons from "./Reducers/accountDragons";
import error from "./Reducers/error";
import publicDragons from "./Reducers/publicDragons";
import language from "./Reducers/language";
import matingOptions from "./Reducers/matingOptions";
import dragon from "./Reducers/dragon";
import generation from "./Reducers/generation";
import counter from "./Reducers/counter";
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import App from "./App";
import {authenticated} from "./Actions/account";
import AccountDragons from "./Components/AccountDragons/AccountDragons";
import PublicDragons from "./Components/PublicDragons/PublicDragons";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        displayLeftMenu,
        stackDragonValues,
        account,
        accountInfo,
        language,
        dragon,
        generation,
        matingOptions,
        accountDragons,
        publicDragons,
        counter,
        error
    }),
    composeEnhancer(applyMiddleware(thunk))
);

const AuthRoute = props => {
    if (!store.getState().account.loggedIn) {
        return <Redirect to={{ pathname: '/' }} />
    }

    const { component, path } = props;

    return <Route poth={path} component={component} />
}

store.dispatch(authenticated())
    .then(() => {
        ReactDOM.render(
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={LandingPage} />
                        <Route exact path='/login' component={App} />
                        <AuthRoute path='/home' component={Home} />
                        <AuthRoute path='/account-dragons' component={AccountDragons} />
                        <AuthRoute path='/public-dragons' component={PublicDragons} />
                    </Switch>
                </Router>
            </Provider>,
            document.getElementById('root')
        );
    });

