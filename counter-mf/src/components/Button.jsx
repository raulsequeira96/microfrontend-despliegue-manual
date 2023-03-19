import React from 'react';
import styled from '@emotion/styled';

const ButtonStyled = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Finlandica&family=Roboto&display=swap');

    font-family: 'Finlandica', sans-serif;
    cursor: pointer;
    font-size: 1.3rem;
    margin: 0px 0.5rem;
`

const Button = ({text, onClick}) => {
  return (
    <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
  )
}

export default Button