import './index.styles.scss';
import React from 'react';

export default function TabPanel<T extends {
    body: string;
    title: string;
    name: string;
    website: string;
}>({
    record
}: { record: T }) {
    return (
        <div className="tab-wrapper">
            <div className="tab-body">
                <p>{record.body}</p>
            </div>
            <h2>{record.title}</h2>
            <h2>{record.name}</h2>
            <div className="tab-information">
                <div className="tab-reviews">
                    <h3>{record.website}</h3>
                </div>
            </div>
        </div>
    );
}
