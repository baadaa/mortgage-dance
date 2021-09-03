import * as React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

import Layout from '../components/layout';
import menuItems from '../components/menuItems';
import Seo from '../components/seo';

const HeadingStyles = styled.h1`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1em;
  margin-bottom: 2em;
  padding: 0.6em 0;
  color: var(--plum700);
  border-bottom: 2px solid var(--plum200);
  border-top: 2px solid var(--plum200);
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    letter-spacing: 0.8em;
  }
  @media screen and (max-width: 768px) {
    letter-spacing: 0.5em;
  }
  @media screen and (max-width: 550px) {
    letter-spacing: 0.25em;
  }
`;
const MenuStyles = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  a {
    color: inherit;
    text-decoration: none;
    background: #fff;
    padding: 40px;
    margin: 0;
    box-shadow: var(--base-shadow);
    border-radius: 15px;
    transition: box-shadow 0.2s, transform 0.2s;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    border: 3px solid transparent;
    svg {
      margin-right: 20px;
      flex-shrink: 0;
    }
    h3,
    p {
      margin: 0;
      /* text-align: center; */
    }
    h3 {
      margin-bottom: 0.25em;
    }
    p {
      font-size: 0.85rem;
      line-height: 1.2;
      opacity: 0.7;
    }
    &:hover {
      transform: translateY(-3px);
      box-shadow: var(--hover-shadow);
    }
    @media screen and (max-width: 1024px) {
      h3 {
        font-size: 1.2rem;
        margin-bottom: 0.35em;
      }
      p {
        font-size: 0.75rem;
        font-weight: 600;
      }
    }
    @media screen and (max-width: 480px) {
      padding: 30px 40px;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Dance with your mortgage" />
    <HeadingStyles>Choose your tune</HeadingStyles>
    <MenuStyles>
      {menuItems.map((item, index) => (
        <Link key={index} to={item.slug}>
          {item.icon}
          <div>
            <h3 style={{ color: item.color }}>{item.title}</h3>
            <p style={{ color: item.color }}>{item.subhead}</p>
          </div>
        </Link>
      ))}
    </MenuStyles>
  </Layout>
);

export default IndexPage;
