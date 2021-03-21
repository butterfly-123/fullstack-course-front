import React from 'react';
import styles from './IconsAuth.module.css';

export default class Padlock extends React.Component {
    render() {
        return <svg width="20" height="20" className={styles.iconAuth} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path d="M400 192H384V128C384 57.408 326.592 0 256 0C185.408 0 128 57.408 128 128V192H112C85.5467 192 64 213.525 64 240V464C64 490.475 85.5467 512 112 512H400C426.453 512 448 490.475 448 464V240C448 213.525 426.453 192 400 192ZM170.667 128C170.667 80.9387 208.939 42.6667 256 42.6667C303.061 42.6667 341.333 80.9387 341.333 128V192H170.667V128ZM277.333 356.736V405.333C277.333 417.109 267.797 426.667 256 426.667C244.203 426.667 234.667 417.109 234.667 405.333V356.736C221.973 349.333 213.333 335.723 213.333 320C213.333 296.469 232.469 277.333 256 277.333C279.531 277.333 298.667 296.469 298.667 320C298.667 335.723 290.027 349.333 277.333 356.736Z" fill="#EBECED"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="512" height="512" fill="#EBECED"/>
                </clipPath>
            </defs>
        </svg>


    }
}

