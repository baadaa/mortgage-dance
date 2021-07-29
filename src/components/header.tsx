import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import JigglePuff from '../assets/jigglypuff/jigglypuff';
import menuItems from './menuItems';

import '../assets/jigglypuff/jigglypuff.css';
import '../styles/hamburgers.css';

type headerProp = {
  path?: string;
};
const HeaderStyles = styled.header`
  width: 100%;
  position: fixed;
  z-index: 9;
  background-color: var(--headerBgColor);
  box-shadow: var(--base-shadow);
  top: 0;
  left: 0;
  height: var(--nav-height);

  .container {
    a {
      color: inherit;
      text-decoration: none;
    }
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
    font-family: 'Changa One', cursive;
    user-select: none;
    align-items: center;
    font-size: 3.5rem;
    font-weight: 400;
    /* text-transform: uppercase; */
    letter-spacing: 0.02em;
    color: #fff;
    transition: letter-spacing 0.5s, color 0.5s;
    transition-timing-function: cubic-bezier(0.12, 1.49, 0.83, 1.6);
    svg {
      overflow: visible;
    }
    span.icon {
      width: 1.5em;
      display: inline-flex;
      align-items: center;
      margin-left: 0.3em;
      margin-right: 0.3em;
    }
    &:hover {
      letter-spacing: 0.2em;
      animation: hand infinite 1s forwards;
      span.icon {
        transform: scale(1.2);
      }
      span.letter:nth-of-type(3n) {
        animation: dance infinite 1s forwards;
      }
      span.letter:nth-of-type(3n + 1) {
        animation: dance infinite 1s backwards 0.333333s;
      }
      span.letter:nth-of-type(3n + 2) {
        animation: dance infinite 1s backwards 0.666666s;
      }
    }
    @media screen and (max-width: 1024px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
      span.icon {
        width: 1.5em;
      }
    }
    @media screen and (max-width: 550px) {
      font-size: 1.8rem;
    }
    @media screen and (max-width: 380px) {
      font-size: 1.5rem;
      padding-right: 3rem;
    }
  }
  @keyframes hand {
    0% {
      cursor: grab;
      color: var(--plum50);
    }
    50% {
      cursor: grabbing;
      color: var(--lemon);
    }
    100% {
      cursor: grab;
      color: var(--plum50);
    }
  }
  @keyframes dance {
    0% {
      transform: rotate(0deg) translateY(0);
    }
    20% {
      transform: rotate(12deg) translateY(-3px);
    }
    40% {
      transform: rotate(0deg) translateY(2px);
    }
    60% {
      transform: rotate(-10deg) translateY(-5px);
    }
    80% {
      transform: rotate(0deg) translateY(0);
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
    padding: 0.75em 0;
    background: var(--plum800);
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
        border-left: 0.5em solid var(--lemon);
      }
      &[data-active='true'] {
        background-color: var(--plum700);
        border-left: 0.5em solid var(--plum300);
      }
      &.about {
        padding-top: 0.2em;
        margin-top: 0.5em;
        border-top: 1px solid var(--plum700);
      }
    }
    a {
      display: block;
      padding: 0.6em 0;
      color: inherit;
      text-decoration: none;
    }
    &.active {
      opacity: 1;
      transform: translateY(5em);
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
      font-weight: 600;
    }
  }
`;
const Header: React.FC<headerProp> = ({ path = '' }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <HeaderStyles>
      <div className="container">
        <Link to="/">
          <h2 style={{ margin: 0 }}>
            <span className="letter">M</span>
            <span className="letter">o</span>
            <span className="letter">r</span>
            <span className="letter">t</span>
            <span className="letter">g</span>
            <span className="letter">a</span>
            <span className="letter">g</span>
            <span className="letter">e</span>
            <span className="icon">
              <JigglePuff width={100} height={100} />
            </span>
            <span className="letter">D</span>
            <span className="letter">a</span>
            <span className="letter">n</span>
            <span className="letter">c</span>
            <span className="letter">e</span>
          </h2>
        </Link>
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
            {menuItems.map((item, index) => (
              <li key={index} data-active={path === item.slug}>
                <Link to={item.slug}>{item.title}</Link>
              </li>
            ))}
            <li className="about" data-active={path === '/about'}>
              <Link to="/about">About this project</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyles>
  );
};

export default Header;
