import React from 'react';
import './TabList.scss';
import Tab from "../Tab/Tab";
import { IPost, IUser, IComment } from '../Tab/types';

export default function TabList(props: { tablist: Array<IComment & IPost & IUser> }) {
  return (
    <div className="TabList">
      {
        props.tablist.map(tab => {
          return <Tab tab={tab} key={tab.id} />;
        })
      }
    </div>
  );
}
