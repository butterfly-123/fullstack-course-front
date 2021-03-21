import React from 'react';
import styles from './LandingPage.module.css';
import LandingHeader from "./LandingHeader/LandingHeader";
import Header from "../Header/Header";
import LandingAbout from "./LandingAbout/LandingAbout";
import LandingLogin from "./LandingLogin/LandingLogin";
import LandingHome from "./LandingHome/LandingHome";
import LandingDragons from "./LandingDragons/LandingDragons";
import LandingPublic from "./LandingPublic/LandingPublic";
import LeftMenu from "../LeftMenu/LeftMenu";

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <LandingHeader />
                <LandingAbout />
                <LandingLogin />
                <LandingHome />
                <LandingDragons />
                <LandingPublic />
            </div>
        )
    }
}


export default LandingPage;
