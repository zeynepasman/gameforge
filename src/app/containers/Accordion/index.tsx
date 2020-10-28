import React, { useEffect, useState } from 'react';
import { Accordion } from '../../components/ui-elements';
import { useFetch } from '../../lib/hooks';
import { Url } from '../../lib/url';
import './index.styles.scss';


const list = [
    { title: 'Post', value: "posts" },
    { title: 'Comment', value: "comments" },
    { title: 'User', value: "users" }
];

export default function AccordionList() {
    const { response: member, execute } = useFetch({ initialResponse: { name: "", body: "", id: "" } });

    const [value, setValue] = useState('');
    const [activeAccordion, setActiveAccordion] = useState(-1);

    const toggle = (index: number) => () => {
        setActiveAccordion(activeAccordion === index ? -1 : index)
        setValue(list[index].value);
    }

    useEffect(() => {
        if (value) {
            execute(Url.member({ type: value, id: 1 }).accordion);
        }
    }, [activeAccordion]);

    return (
        <div className="container">
            <dl className="accordion">
                {
                    list.map((item, index) => (
                        <Accordion
                            isActive={index === activeAccordion}
                            key={index}
                            title={item.title}
                            body={member?.body || member.name}
                            onClick={toggle(index)} />
                    ))
                }
            </dl>
        </div>
    );
}
