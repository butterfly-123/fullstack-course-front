import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountDragons } from '../../Actions/accountDragons';
import AccountDragonRow  from "./AccountDragonRow";

class AccountDragons extends Component {
    componentDidMount() {
        this.props.fetchAccountDragons();
    }

    render() {
        return(
            <div>
                <div>
                    <div className="fluid-container">
                        <div className='row'>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 home-page">
                                <div className='title-container'>
                                    <h2>Account Dragons</h2>
                                </div>
                                {
                                    this.props.accountDragons.dragons.map(dragon => {
                                        return (
                                            <div key={dragon.dragonId}>
                                                <AccountDragonRow dragon={dragon} />
                                                <div className='hr'></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default connect(
    ({ accountDragons }) => ({ accountDragons }),
    { fetchAccountDragons }
)(AccountDragons);