import './index.styles.scss';
import React from 'react';

export default function Accordion({
    body,
    title,
    isActive,
    onClick
}: {
    body: string;
    title: string;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <div>
            <dt className={isActive ? 'title is-expanded' : 'title'} onClick={onClick}>
                {title}
            </dt>
            <dd className={isActive ? 'content is-expanded' : 'content'}>
                <p>{body}</p>
            </dd>
        </div>
    );
}
