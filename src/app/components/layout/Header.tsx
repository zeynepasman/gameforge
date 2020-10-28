import React from 'react';
import Dropdown from '../ui-elements/Dropdown';
import Container from './Container';

export default function Header() {
  return (
    <header>
      <Container className='d-flex justify-content-between'>
        <h1 className='flex-center'>Game<span className="highlight">For</span>ge</h1>
        <Dropdown />
      </Container>
    </header>
  );
}
