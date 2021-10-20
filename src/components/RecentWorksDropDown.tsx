import React, { Component } from 'react'
import style from './RecentWorksDropDown.module.css';

export class RecentWorksDropDown extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showItems: false
        }
    }
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.dropdownContainer} onClick={() => {
                    this.setState((prevState:any) => ({ showItems: !prevState.showItems}))
                }}>
                    <div className={style.dropdownContainerItem}>Recent works</div>
                </div>
                { this.state.showItems && (
                <div className={style.dropdownItem}></div>)}
                </div>
        )
    }
}

export default RecentWorksDropDown

