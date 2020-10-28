import React from 'react';
import Accordion from '../Accordion/Accordion';
import './AccordionList.scss';
import ApiService from '../../../api/JsonPlaceholder';


const list = [{ title: 'Post', value: "posts" }, { title: 'Comment', value: "comments" }, { title: 'User', value: "users" }];

export default function AccordionList() {
    const [value, setValue] = React.useState('');
    const [activeAccordion, setActiveAccordion] = React.useState(-1);
    const [accordion, setAccordion] = React.useState({ name: "", body: "", id: "" });
    const toggle = (index: number) => () => {
        setActiveAccordion(activeAccordion === index ? -1 : index)
        let object = list[index];
        let value = object.value;
        setValue(value);
    }

    React.useEffect(() => {
        ApiService.displayAccordion(value).then((data: any) => {
            setAccordion(data)
        });
    }, [activeAccordion]);

    return (
        <div className="container">
            <dl className="accordion">
                {
                    list.map((item, index) => (
                        <Accordion activeAccordion={activeAccordion} index={index} key={index} title={item.title} body={accordion && accordion.body ? accordion.body : accordion.name} onClick={toggle(index)} />
                    ))
                }
            </dl>

        </div>
    );
}
