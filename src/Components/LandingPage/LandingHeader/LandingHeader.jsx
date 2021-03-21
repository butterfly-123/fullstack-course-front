import React from 'react';
import styles from './LandingHeader.module.css';
import imgDragon from "../../Shared/Icons/Img/dragon.png";
import {Link} from "react-router-dom";
import {translations} from "../../../transaltions";
import {connect} from "react-redux";

class LandingHeader extends React.Component {
    render() {
        const selectedLang = this.props.language.lang;

        return (
           <div className={styles.landingHeader}>
               <div className={styles.landingHeaderTitleContainer}>
                   <div className={styles.landingHeaderTitle}>
                        <p className={styles.title}>{translations[selectedLang].TITLE}</p>
                        <p className={styles.subTitle}>{translations[selectedLang].SUBTITLE}</p>
                   </div>
                   <button>
                       <Link
                           to={'/login'}
                           style={{ textDecoration: 'none' , color: '#3AB1CB' }}
                       >{translations[selectedLang].AUTH_FORM}</Link>
                   </button>
               </div>
           </div>
        )
    }
}

export default connect(
    ({language}) => ({language}),
    null
)(LandingHeader);
