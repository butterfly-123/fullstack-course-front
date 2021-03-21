import React from 'react';
import styles from './Container.module.css';

export default class Container extends React.Component {
    render() {
        let cssClass = styles.container
        if (this.props.block) {
            cssClass += ` ${styles.blockContainer}`
        }

        if (this.props.padding) {
            cssClass += ` ${styles.paddingContainer}`
        }

        if (this.props.totalHigh) {
            cssClass += ` ${styles.highContainer}`
        }

        return (
            <div className={cssClass}>
                {this.props.children}
            </div>
        )
    }
}
