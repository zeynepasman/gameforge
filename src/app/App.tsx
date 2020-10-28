import React from 'react';
import './App.scss';
import Col from './components/layout/Col';
import Container from './components/layout/Container';
import Header from './components/layout/Header';
import Row from './components/layout/Row';
import Accordion from './containers/Accordion';
import Tabs from './containers/Tabs';

export default function App() {

    return (
        <div className="app-container">
            <Header />
            <Container>
                <Row>
                    <Col span={9}>
                        <Tabs />
                    </Col>
                    <Col span={3}>
                        <Accordion />
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

