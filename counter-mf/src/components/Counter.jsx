import styled from '@emotion/styled';
import React, { useState } from 'react';
import Button from './Button';
import "./Counter.css";

const Succes = styled.span`
  color: lime;
`;

const Error = styled.span`
  color: tomato;
`;

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className='Counter-container'>
      <h1>Counter:
        {
        counter >= 0
        ? <Succes>{counter}</Succes>
        : <Error>{counter}</Error>
        }
      </h1>
      <Button onClick={() => setCounter(counter + 1)} text="+1" />
      <Button onClick={() => setCounter(counter - 1)} text="-1" />
    </div>
  )
}

export default Counter