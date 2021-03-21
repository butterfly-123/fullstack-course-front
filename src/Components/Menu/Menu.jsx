import React, { Component } from 'react';
import ReturnMenu from '../Menu/ReturnMenu';

class Menu extends Component {
    render() {
        return (
            <div>
                <ReturnMenu
                    link='/'
                    name='Home'
                    // icon= {<Home1 />}
                />
                <ReturnMenu
                    link='account-dragons'
                    name='Account Dragons'
                    // icon= {<User1 />}
                />
                <ReturnMenu
                    link='/public-dragons'
                    name='Public Dragons'
                    // icon= {<Public1 />}
                />
            </div>
        )
    }
}

export default Menu;
