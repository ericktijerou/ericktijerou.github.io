import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import { AppContext } from './../App/AppContext';

const sharedStyles = css`
  transition: color 0.5s linear;
  position: relative;
  z-index: 1;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const C = {
  Name: styled.h1`
    ${sharedStyles};
    font-weight: 700;
    font-size: 5rem;
    color: ${({ theme }) => theme.primaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 3.5rem;
    }
  `,
  Title: styled.h2`
    ${sharedStyles};
    font-weight: 500;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.secondaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 1.5rem;
    }
  `,
};

const hStyle = { color: '#12d640' };

export const Content = () => {
  const { theme } = useContext(AppContext);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Student", "Developer", "Competitive Programmer", "Coder"],
      loop: true,
      typeSpeed: 60,
      backSpeed: 35,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <C.Name theme={theme} data-v2='name' aria-label='My name is Erick Tijero'>Erick Tijero Urbano</C.Name>
      <C.Title theme={theme} data-v2='title' aria-label='I am a software engineer'>
        I'm <span ref={el} style={hStyle}></span>
      </C.Title>
    </div>
  );
};
