import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import JigglePuff from './jigglypuff/jigglypuff';
import './jigglypuff/jigglypuff.css';
import '../styles/hamburgers.css';

const HeaderStyles = styled.header`
  width: 100%;
  background-color: var(--headerBgColor);
  box-shadow: var(--base-shadow);
  .container {
    max-width: var(--max-width);
    width: 100%;
    position: relative;
    padding: 15px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 380px) {
      /* justify-content: flex-start; */
    }
  }
  h2 {
    display: flex;
    font-family: 'Mountains of Christmas', cursive;
    user-select: none;
    align-items: center;
    font-size: 3.5rem;
    letter-spacing: 0.05em;
    color: #4d192a;
    transition: letter-spacing 0.5s, color 0.5s;
    transition-timing-function: cubic-bezier(0.12, 1.49, 0.83, 1.6);
    svg {
      overflow: visible;
    }
    span {
      width: 1.8em;
      display: flex;
      align-items: center;
      margin-left: 0.3em;
      margin-right: 0.3em;
    }
    &:hover {
      letter-spacing: 0.2em;
      animation: hand infinite 1s forwards;
    }
    @media screen and (max-width: 1024px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
      span {
        width: 1.5em;
      }
    }
    @media screen and (max-width: 550px) {
      font-size: 1.8rem;
    }
    @media screen and (max-width: 380px) {
      font-size: 1.7rem;
      padding-right: 3rem;
    }
  }
  @keyframes hand {
    0% {
      cursor: grab;
      color: #603597;
    }
    50% {
      cursor: grabbing;
      color: #9b3155;
    }
    100% {
      cursor: grab;
      color: #603597;
    }
  }
  .menu {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    transform: scale(1.5);
    transform-origin: right;
    @media screen and (max-width: 1024px) {
      transform: scale(1.2);
    }
    @media screen and (max-width: 768px) {
      transform: scale(1);
    }
    @media screen and (max-width: 550px) {
      transform: scale(0.8);
    }
  }
  nav {
    z-index: 9;
    position: absolute;
    top: 0;
    right: 15px;
    color: #fff;
    font-size: 1.5rem;
    padding: 1.5em 0;
    background: var(--orange);
    border-radius: 1em;
    box-shadow: var(--hover-shadow);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      padding: 0 1.5em;
      line-height: 1.5;
      margin: 0;
      border-left: 0.5em solid transparent;
      &:hover {
        text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
        border-left: 0.5em solid var(--yellow);
      }
    }
    a {
      display: block;
      padding: 0.75em 0;
      color: inherit;
      text-decoration: none;
    }
    &.active {
      opacity: 1;
      transform: translateY(5.5em);
      pointer-events: all;
    }
    @media screen and (max-width: 1024px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.85rem;
      font-weight: bold;
    }
  }
`;
const Header: React.FC = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <HeaderStyles>
      <div className="container">
        <h2 style={{ margin: 0 }}>
          Mortgage
          <span>
            <JigglePuff width={100} height={100} />
          </span>
          Dance
        </h2>
        <span className="menu">
          <button
            className={`hamburger hamburger--vortex ${
              menuIsActive ? 'is-active' : ''
            }`}
            type="button"
            onClick={() => setMenuIsActive(!menuIsActive)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </span>
        <nav className={menuIsActive ? 'active' : ''}>
          <ul>
            {[
              {
                title: 'Mortgage Basics',
                slug: '/basics',
              },
              {
                title: 'Glossary',
                slug: '/glossary',
              },
              {
                title: 'Mortgage Calculator',
                slug: '/mortgage-calculator',
              },
              {
                title: 'Affordability Calculator',
                slug: '/affordability-calculator',
              },
              {
                title: 'Amortization Schedule Calculator',
                slug: '/amortization-calculator',
              },
              {
                title: 'Other Resources',
                slug: '/resources',
              },
            ].map((item, index) => (
              <li key={index}>
                <Link to={item.slug}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </HeaderStyles>
  );
};

export default Header;
