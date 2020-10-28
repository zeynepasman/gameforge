import './Accordion.scss';
import React from 'react';

export default function Accordion(props: {
    body: string,
    title: string,
    activeAccordion: number,
    index: number
    onClick: () => void;
}) {
    const isActive = props.activeAccordion === props.index;
    return (<div>
        <dt className={isActive ? 'title is-expanded' : 'title'} onClick={props.onClick}>
            {props.title}
        </dt>
        <dd className={isActive ? 'content is-expanded' : 'content'} onClick={props.onClick}>
            <p>{props.body}</p>
        </dd>
    </div>);
}
