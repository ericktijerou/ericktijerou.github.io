import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './../App/AppContext';
import { GitHub, LinkedIn, Resume, Email } from './../icons';

const Container = styled.div`
  a,
  a:active,
  a:hover {
    outline: 0;
  }

  .bt-container {
    display: flex;
  }

  .button-container {
    display: inline-block;
    height: 4rem;
    width: 4rem;
    margin-right: 3.5rem;
    margin-top: 3rem;
    @media only screen and (max-device-width: 992px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  .button {
    transition: color 0.5s linear;
    height: 4rem;
    width: 4rem;
    color: ${({ theme }) => theme.primaryTextColor};
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border-radius: 25%;
  }

  .icon {
    align-items: center;
    padding: 0.3rem;
  }

  .icon_title {
    font-size: 0.8rem;
  }

  .button:hover {
    background-color: ${({ theme }) => theme.shadowColor};
    box-shadow: 0 0 0.75rem 0.75rem rgba(128, 128, 128, 0.25);
  }

  .button:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .button-container .icon_title {
    display: none;
  }

  .button-container:hover .icon_title {
    display: initial;
  }

  .button-container:hover .icon {
    display: none;
  }

  @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
    .button-container {
      height: 3rem;
      width: 3rem;
    }

    .button {
      height: 3rem;
      width: 3rem;
    }

    .icon {

    }

    .icon_title {
      font-size: 1rem;
    }
  }
`;

export const Buttons = () => {
  const { theme } = useContext(AppContext);

  const DATA = [
    {
      href: 'https://github.com/ericktijerou',
      aria: 'GitHub profile',
      icon: <GitHub />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/ericktijerou/',
      aria: 'LinkedIn profile',
      icon: <LinkedIn />,
      label: 'LinkedIn',
    },
    {
      href: 'https://drive.google.com/file/d/1Nj-8OXgP_SQUAA-NBcU7HNvcfcXMguw1/view?usp=sharing',
      aria: 'Resume',
      icon: <Resume />,
      label: 'Resume',
    },
    {
      href: 'mailto:ericktijerou@gmail.com',
      aria: 'Send me an email',
      icon: <Email />,
      label: 'Email',
    },
  ];

  return (
    <Container theme={theme} className='bt-container'>
      {DATA.map(({ href, aria, icon, label }, i) => (
        <span className='button-container' key={i}>
          <a className='button' href={href} target='_self' aria-label={aria} rel='noopener noreferrer'>
            <div className='icon'>{icon}</div>
            <span className='icon_title' data-v2={label}>{label}</span>
          </a>
        </span>
      ))}
    </Container>
  );
};
