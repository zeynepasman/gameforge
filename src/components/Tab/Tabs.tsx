import React from 'react';
import './Tabs.scss';
interface Props {
    onClick: (value: string) => void;
    type: string
}
let tabs = [{
    label: "Users",
    value: "users"
},
{
    label: "Posts",
    value: "posts"
},
{
    label: "Comments",
    value: "comments"
}];
const Tab: React.FC<Props> = ({
    onClick,
    type
}) => {
    const displayTabs = (e: any) => {
        onClick(e.target.value);
    }
    const getActiveByClass = (value: string) => {
        if (type === value) {
            return 'active'
        }
        return '';
    }
    return (
        <div>
            <div className="tab">
                {
                    tabs.map(tab => {
                        return <button className={getActiveByClass(tab.value)} value={tab.value} key={tab.value} onClick={displayTabs} >{tab.label}</button>;
                    })
                }
            </div>
        </div>
    );
}
export default Tab;