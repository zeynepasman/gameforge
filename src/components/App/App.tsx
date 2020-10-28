import React from 'react';
import './App.scss';
import Tabs from '../Tab/Tabs';
import TabList from '../Tab/TabList/TabList';
import Dropdown from '../Dropdown/Dropdown'
import ApiService from '../../api/JsonPlaceholder';
import AccordionList from '../Accordion/AccordionList/AccordionList';

export default function App() {

    const [value, setValue] = React.useState('users');
    const [data, setData] = React.useState([]);
    
    const onClick = (value: string) => {
        setValue(value);
    }
    React.useEffect(() => {
        ApiService.displayTab(value).then((data: any) => {
            setData(data)
        })
    }, [value]);

    return (
        <div className="App">
            <h1>Game<span className="highlight">For</span>ge</h1>
            <ul>
                <Dropdown />
                <li style={{ float: "left" }}><Tabs type={value} onClick={onClick}></Tabs></li>
            </ul>
            <AccordionList ></AccordionList>
            <TabList tablist={data}></TabList>
        </div>
    );

}

