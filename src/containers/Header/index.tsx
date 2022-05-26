import React, { useState } from 'react';
import { Button, Input } from '@/UI';
import { Banner, CenteredRow } from './styles';
import { Container } from 'styled-bootstrap-grid';

const Header: React.FC = () => {

  const [value, setInputValue] = useState<string>('');

  const handleInputChange =
    (e: React.ChangeEvent<HTMLInputElement>): string => {
      setInputValue(e.currentTarget.value);
      return value;
    };

  const setConcole = (): void => {    // temporary, just for assign onClick method
    console.log('Hello');
  };

  return (
    <Banner>
      <Container>
        <CenteredRow>
          <a href="https://www.netflix.com/" target="_blank">
            <b>netflix</b>roulette
          </a>
          <Button
            type="button"
            value="+ Add Movie"
            onClick={setConcole}
            theme="light"
          />
        </CenteredRow>
        <h1>FIND YOUR MOVIE</h1>
        <CenteredRow>
          <Input
            value={value}
            onChange={handleInputChange}
            placeholder="What do you want to watch?"
            margin="right"
          />
          <Button
            type="button"
            value="Search"
            onClick={setConcole}
          />
        </CenteredRow>
      </Container>
    </Banner>
  );
};

export default Header;
