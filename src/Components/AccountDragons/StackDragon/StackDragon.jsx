import React from 'react';
import Container from "../../Shared/Container/Container";
import styles from './StackDragon.module.css';
import Button from "../../Shared/Button/Button";
import Info from "../../Shared/Icons/Info/Info";
import {translations} from "../../../transaltions";
import DragonAvatar from "../../DragonAvatar/DragonAvatar";
import config from "../../../config";
import {connect} from "react-redux";
import Traits from "../../../Traits";

const api = config.api

class StackDragon extends React.Component {
    state = {
        nickname: this.props.dragon.nickname,
        isPublic: this.props.dragon.isPublic,
        saleValue: this.props.dragon.saleValue,
        sireValue: this.props.dragon.sireValue,
        edit: false
    }

    toggleEdit = () => {
        this.setState({edit: !this.state.edit});
    }

    save = () => {
        console.log('asdfasdfasdf');

        fetch(`${api}/dragon/update`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
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
                this.setState({edit: false});
            })
            .catch(error => alert(error.message))
    }

    get SaveButton()
    {
        const selectedLang = this.props.language.lang;

        return <div className={styles.button}>
            <Button
                text={translations[selectedLang].SAVE}
                onClick={this.save}
            />
        </div>;
    }

    get EditButton()
    {
        const selectedLang = this.props.language.lang;

        return <div className={styles.button}>
            <Button
                text={translations[selectedLang].EDIT}
                onClick={this.toggleEdit}
            />
        </div>;
    }

    updateSaleValue = event => {
        this.setState({saleValue: event.target.value})
    }

    updateSireValue = event => {
        this.setState({sireValue: event.target.value})
    }

    updateIsPublic = event => {
        this.setState({isPublic: event.target.checked})
    }

    updateNickname = event => {
        this.setState({nickname: event.target.value})
    }

    renderNickname()
    {
        const selectedLang = this.props.language.lang;

        return (
            <>
                <td>{translations[selectedLang].NAME}</td>
                <td>
                    {this.state.edit ?
                        <div>
                            <span className={styles.tooltipText}>{translations[selectedLang].WRITE}</span>
                            <input
                                className={styles.accountDragonRowInputEdit}
                                type='text'
                                value={this.state.nickname}
                                onChange={this.updateNickname}
                                disabled={!this.state.edit}
                            />
                            <div className={styles.iconInfo}>
                                <Info/>
                            </div>
                        </div>
                        :
                        <div>
                            <input
                                className={styles.accountDragonRowInput}
                                type='text'
                                value={this.state.nickname}
                                onChange={this.updateNickname}
                                disabled={!this.state.edit}
                            />
                        </div>
                    }
                </td>
            </>
        )
    }

    renderId()
    {
        const selectedLang = this.props.language.lang;

        return (
            <>
                <td>{translations[selectedLang].DRAGON_ID}</td>
                <td>{this.props.dragon.dragonId}</td>
            </>
        )
    }

    renderImage()
    {
        const selectedLang = this.props.language.lang;

        return (
            <>
                <td>{translations[selectedLang].DRAGON_IMAGE}</td>
                <td>
                    <DragonAvatar traits={this.props.dragon.traits}/>
                </td>
            </>
        )
    }

    renderTraits()
    {
        const selectedLang = this.props.language.lang;

        return (
            <>
                <td>{translations[selectedLang].DRAGON_TRAITS}</td>
                <td>
                    <Traits traits={this.props.dragon.traits}/>
                </td>
            </>
        )
    }

    renderSaleValue()
    {
        const selectedLang = this.props.language.lang;

        return (
            <>
                <td>{translations[selectedLang].SALE_VALUE}</td>
                <td>
                    {this.state.edit ?
                        <div>
                            <span className={styles.tooltipText}>{translations[selectedLang].WRITE_VALUE}</span>
                            <input
                                className={styles.accountDragonRowInputEdit}
                                type='number'
                                disabled={!this.state.edit}
                                value={this.state.saleValue}
                                onChange={this.updateSaleValue}
                            />
                            <div className={styles.iconInfo}>
                                <Info/>
                            </div>
                        </div>
                        :
                        <div>
                            <input
                                className={styles.accountDragonRowInput}
                                type='number'
                                disabled={!this.state.edit}
                                value={this.state.saleValue}
                                onChange={this.updateSaleValue}
                            />
                        </div>
                    }
                </td>
            </>
        )
    }

    renderSireValue()
    {
        const selectedLang = this.props.language.lang;

        return (
            <>
                <td>{translations[selectedLang].SIRE_VALUE}</td>
                <td>
                    {this.state.edit ?
                        <div>
                            <span className={styles.tooltipText}>{translations[selectedLang].WRITE_VALUE}</span>
                            <input
                                className={styles.accountDragonRowInputEdit}
                                type='number'
                                disabled={!this.state.edit}
                                value={this.state.sireValue}
                                onChange={this.updateSireValue}
                            />
                            <div className={styles.iconInfo}>
                                <Info/>
                            </div>
                        </div>
                        :
                        <div>
                            <input
                                className={styles.accountDragonRowInput}
                                type='number'
                                disabled={!this.state.edit}
                                value={this.state.saleValue}
                                onChange={this.updateSaleValue}
                            />
                        </div>
                    }
                </td>
            </>
        )
    }

    renderPublic()
    {
        const selectedLang = this.props.language.lang;

        return (
            <>
                <td>{translations[selectedLang].PUBLIC}</td>
                <td>
                    {this.state.edit ?
                        <div>
                            <span className={styles.tooltipTextPublic}>{translations[selectedLang].CHOOSE}</span>
                            <input
                                type='checkbox'
                                className={styles.accountDragonRowInputEdit}
                                disabled={!this.state.edit}
                                checked={this.state.isPublic}
                                onChange={this.updateIsPublic}
                            />
                            <div className={styles.iconInfoPublic}>
                                <Info/>
                            </div>
                        </div>
                        :
                        <div>
                            <input
                                type='checkbox'
                                className={styles.accountDragonRowInput}
                                disabled={!this.state.edit}
                                checked={this.state.isPublic}
                                onChange={this.updateIsPublic}
                            />
                        </div>
                    }
                </td>
            </>
        )
    }

    render()
    {
        const selectedLang = this.props.language.lang;

        return (
            <div className={styles.container}>
                <Container padding={true}>
                    <table>
                        <tr>
                            <th>{translations[selectedLang].NAME}</th>
                            <th>{translations[selectedLang].VALUE}</th>
                        </tr>
                        <tr>
                            {this.renderNickname()}
                        </tr>
                        <tr>
                            {this.renderId()}
                        </tr>
                        <tr>
                            {this.renderImage()}
                        </tr>
                        <tr>
                            {this.renderTraits()}
                        </tr>
                        <tr>
                            {this.renderSaleValue()}
                        </tr>
                        <tr>
                            {this.renderSireValue()}
                        </tr>
                        <tr>
                            {this.renderPublic()}
                        </tr>
                    </table>
                    {
                        this.state.edit ? this.SaveButton : this.EditButton
                    }
                </Container>
            </div>
        )
    }
}

export default connect(
    ({ language }) => ({ language }),
    null
)(StackDragon);
