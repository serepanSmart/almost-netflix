import React, { useState, useCallback } from 'react';
import { Button, Input, BarsLoader } from '@/UI';
import { CenteredRow } from './styles';
import { EXTERNAL_LINK } from '@/constants';

const BannerContainer: React.FC = () => {

  const [value, setInputValue] = useState<string>('');
  const [loading] = useState<boolean>(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): string => {
      setInputValue(e.currentTarget.value);
      return value;
    }, [value]);

  const setConcole = (): void => {
    console.log('Hello, check in console');
  };

  return (
    <>
      <CenteredRow>
        <EXTERNAL_LINK />
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
          value={loading ? null : 'Search'}
          onClick={setConcole}
        >
          {loading && <BarsLoader />}
        </Button>
      </CenteredRow>
    </>
  );
};

export default BannerContainer;
