import React, { Component } from 'react'
import style from './RecentWorksDropDown.module.css';
const months = 6;

type Props = {
    title: string;
    gitHubUserName: string;
    sendGaEvent: (a:any, b:any, c:any, d:any) => {};
    actionConstant: string;
    catogoryConstant: string;
};
export class RecentWorksDropDown extends Component<Props, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showItems: false,
            items: []
        }
        this.getItems = this.getItems.bind(this);
    }

    getItems() {
        const {
            gitHubUserName
        } = this.props;

        fetch(`https://api.github.com/users/${gitHubUserName}/repos`)
                .then(val => val.json())
                .then(val => {
                    let sortedRepos = val.filter((ele: any) => {
                        let timeArray = ele.updated_at.split('-');
                        timeArray[2] = timeArray[2].split('T') ? timeArray[2].split('T')[0] : 0;
                        timeArray = timeArray.map((time:any) => Number(time));
                        timeArray[1] = timeArray[1] + months
                        if (timeArray[1]  > 12) {
                            timeArray[0] = timeArray[0] + Math.floor(timeArray[1] / 12);
                            timeArray[1] = timeArray[1] % 12;
                        }
                        let newDate = new Date(timeArray[0], timeArray[1], timeArray[2]);
                        let today = new Date();
                        return newDate > today;
                    })
                    .sort((a: any, b: any) => b.updated_at.localeCompare(a.updated_at))

                    this.setState((prevState: any) => ({
                        items: sortedRepos
                    }));
                })
    }

    render() {
        const {
            title,
            sendGaEvent,
            actionConstant,
            catogoryConstant
        } = this.props;
        return (
            <div className={style.wrapper}>
                <div className={style.dropdownContainer} onClick={() => {
                    this.setState((prevState: any) => ({ showItems: !prevState.showItems }));
                    this.getItems();
                }}>
                    <div className={style.dropdownContainerItem}>{ title }</div>
                </div>
                {this.state.showItems && (
                    <>
                        {this.state.items.length !== 0 ? (
                            <>
                                <div className={style.dropdownItem}>
                                    <div className={style.dropdownItemTitle}>{`Last ${months} month`}</div>
                                    {this.state.items.map((repo:any) => (
                                        <div className={style.dropdownRepoItem}>
                                            <div className={style.dropdownRepoItemTitle} onClick={() => {
                                                sendGaEvent(catogoryConstant, actionConstant, 1, repo.name);
                                                window.open(repo.html_url, '_blank');
                                            }}>
                                                {repo.name}
                                            </div>
                                            <div className={style.dropdownRepoItemDate}>
                                                {repo.updated_at.split('T')[0]}
                                            </div>
                                            <div className={style.dropdownRepoItemFooter}>
                                                <div className={style.dropdownRepoItemFooterItem}>{`${repo.stargazers_count} stars`}</div>
                                                <div className={style.dropdownRepoItemFooterItem}>{`${repo.watchers_count} watchers`}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>) : (
                            <>
                                <div className={style.dropdownItem}>
                                    <div className={style.dropdownItemEmptyContainer}>
                                        <div className={style.dropdownItemEmptyTitle}>Oops! It's empty</div>
                                        <img className={style.dropdownItemEmptyImage} src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/empty-min.png" alt="" />
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        )
    }
}

export default RecentWorksDropDown

