import React, { Component } from 'react';
import DragonAvatar from "../DragonAvatar/DragonAvatar";
import config from '../../config';
import Traits from "../Traits/Traits";

const api = config.api

class AccountDragonRow extends Component {
    state = {
        nickname: this.props.dragon.nickname,
        isPublic: this.props.dragon.isPublic,
        saleValue: this.props.dragon.saleValue,
        sireValue: this.props.dragon.sireValue,
        edit: false
    }

    toggleEdit = () => {
        this.setState({ edit: !this.state.edit });
    }

    save = () => {
        fetch(`${api}/dragon/update`, {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                dragonId: this.props.dragon.dragonId,
                nickname: this.state.nickname,
                isPublic: this.state.isPublic,
                saleValue: this.state.saleValue,
                sireValue: this.state.sireValue
            })
        })
            .then(res => res.json())
            .then(json => {
                if (json.type === 'error') {
                } else {
                    this.toggleEdit();
                }
            })
            .catch(error => console.log(error.message))
    }

    get SaveButton(){
        return <button
            className='button-edit-save'
            onClick={this.save}>Save</button>;
    }

    get EditButton(){
        return <button
            className='button-edit-save'
            onClick={this.toggleEdit}>Edit</button>;
    }

    updateSaleValue = event => {
        this.setState({ saleValue: event.target.value })
    }

    updateSireValue = event => {
        this.setState({ sireValue: event.target.value })
    }

    updateIsPublic = event => {
        this.setState({ isPublic: event.target.checked })
    }

    updateNickname = event => {
        this.setState({ nickname: event.target.value })
    }

    render() {

        return(
            <div className='container-value-is-public'>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Dragon name</td>
                            <td>
                                {this.state.edit ?
                                    <div>
                                        <input
                                            className='account-dragon-row-input-edi'
                                            type='text'
                                            value={this.state.nickname}
                                            onChange={this.updateNickname}
                                            disabled={!this.state.edit}
                                        />
                                        <span className='tooltip-text'>You can write <b>Dragon Name</b></span>
                                    </div>
                                    :
                                    <input
                                        className='account-dragon-row-input'
                                        type='text'
                                        value={this.state.nickname}
                                        onChange={this.updateNickname}
                                        disabled={!this.state.edit}
                                    />
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Dragon ID</td>
                            <td>{this.props.dragon.dragonId}</td>
                        </tr>
                        <tr>
                            <td>Dragon Image</td>
                            <td><DragonAvatar traits={this.props.dragon.traits}/></td>
                        </tr>
                        <tr>
                            <td>Dragon Traits</td>
                            <td><Traits traits={this.props.dragon.traits}/></td>
                        </tr>
                        <tr>
                            <td>Sale Value</td>
                            <td>
                                {this.state.edit ?
                                    <div>
                                        <input
                                            type='number'
                                            disabled={!this.state.edit}
                                            value={this.state.saleValue}
                                            onChange={this.updateSaleValue}
                                            className='account-dragon-row-input-edi'
                                        />
                                        <span className='tooltip-text'>You can write <b>Sale Value</b></span>
                                    </div>
                                    :
                                    <input
                                        type='number'
                                        disabled={!this.state.edit}
                                        value={this.state.saleValue}
                                        onChange={this.updateSaleValue}
                                        className='account-dragon-row-input'
                                    />
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Sire Value</td>
                            <td>
                                {this.state.edit ?
                                    <div>
                                        <input
                                            type='number'
                                            disabled={!this.state.edit}
                                            value={this.state.sireValue}
                                            onChange={this.updateSireValue}
                                            className='account-dragon-row-input-edi'
                                        />
                                        <span className='tooltip-text'>You can write <b>Sire Value</b></span>
                                    </div>
                                    :
                                    <input
                                        type='number'
                                        disabled={!this.state.edit}
                                        value={this.state.saleValue}
                                        onChange={this.updateSaleValue}
                                        className='account-dragon-row-input'
                                    />
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Public</td>
                            <td>
                                {this.state.edit ?
                                    <div>
                                        <input
                                            type='checkbox'
                                            disabled={!this.state.edit}
                                            checked={this.state.isPublic}
                                            onChange={this.updateIsPublic}
                                            className='account-dragon-is-public-input'
                                        />
                                        <span className='tooltip-text'>You can choose <b>Public</b></span>
                                    </div>
                                    :
                                    <input
                                        type='checkbox'
                                        disabled={!this.state.edit}
                                        checked={this.state.isPublic}
                                        onChange={this.updateIsPublic}
                                        className='account-dragon-is-public-input'
                                    />
                                }
                            </td>
                        </tr>
                        <tr>
                            {
                                this.state.edit ? this.SaveButton : this.EditButton
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
}

export default AccountDragonRow;