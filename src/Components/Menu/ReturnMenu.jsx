import React, { Component } from 'react';
import styles from './Menu.module.css';
import {Link} from "react-router-dom";

class ReturnMenu extends Component {
    render() {
        const { link, name, onClick } = this.props;

        return (
            <div>
                <Link
                    onClick={onClick}
                    to={link}
                    style={{ textDecoration: 'none' , color: '#6E6B7B' }}
                >
                    <span>{name}</span>
                </Link>
            </div>
        )
    }
}

export default ReturnMenu;
