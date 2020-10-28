import './Tab.scss';
import React from 'react';
import { IPost, IComment, IUser } from './types';

export default function Tab(props: {
    tab: IPost & IComment & IUser;
}) {
    return (<div className="Tab">
        <div className="tabcontainer">
            <p>{props.tab.body}</p>
        </div>
        <h2>{props.tab.title}</h2>
        <h2>{props.tab.name}</h2>
        <div className="Tab-information">
            <div className="Tab-reviews">
                <h3>{props.tab.website}</h3>
            </div>
        </div>
    </div>);
}
