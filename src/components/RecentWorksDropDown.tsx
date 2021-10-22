import React, { Component } from 'react'
import style from './RecentWorksDropDown.module.css';

type Props = {
    title: string;
};
export class RecentWorksDropDown extends Component<Props, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showItems: false
        }
    }
    render() {
        const {
            title
        } = this.props;
        return (
            <div className={style.wrapper}>
                <div className={style.dropdownContainer} onClick={() => {
                    this.setState((prevState:any) => ({ showItems: !prevState.showItems}))
                }}>
                    <div className={style.dropdownContainerItem}>{ title }</div>
                </div>
                { this.state.showItems && (
                    <div className={style.dropdownItem}>
                        <div className={style.dropdownItemEmptyTitle}>Oops! It's empty</div>
                        <img className={style.dropdownItemEmptyImage} src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/empty-min.png" alt="" />
                </div>)}
                </div>
        )
    }
}

export default RecentWorksDropDown

