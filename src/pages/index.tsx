// If you don't want to use TypeScript you can delete this file!
import * as React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import {
  IconKnowledge,
  IconBook,
  IconMortgage,
  IconAffordability,
  IconTime,
  IconLibrary,
} from '../components/icons';
import Layout from '../components/layout';
import Seo from '../components/seo';

const HeadingStyles = styled.h1`
  text-align: center;
  font-size: 30px;
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
    align-items: center;
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
        font-weight: bold;
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
const UsingTypescript: React.FC = () => (
  <Layout>
    <Seo title="Using TypeScript" />
    <HeadingStyles>What do you want to dance to?</HeadingStyles>
    <MenuStyles>
      {[
        {
          title: 'Mortgage Basics',
          icon: <IconKnowledge color="var(--turquoise)" />,
          color: 'var(--turquoise)',
          subhead: 'What are some fundamentals you should know?',
          slug: '/basics',
        },
        {
          title: 'Glossary',
          icon: <IconBook color="var(--eggplant)" />,
          color: 'var(--eggplant)',
          subhead: 'What do all these gibberish actually mean?',
          slug: '/glossary',
        },
        {
          title: 'Mortgage Calculator',
          icon: <IconMortgage color="var(--plum)" />,
          color: 'var(--plum)',
          subhead: 'What will your monthly payment look like?',
          slug: '/mortgage-calculator',
        },
        {
          title: 'Affordability Calculator',
          icon: <IconAffordability color="var(--orange)" />,
          color: 'var(--orange)',
          subhead: 'How much can you really afford?',
          slug: '/affordability-calculator',
        },
        {
          title: 'Amortization Schedule Calculator',
          icon: <IconTime color="var(--berry)" />,
          color: 'var(--berry)',
          subhead: 'What will your principal and interest be over time?',
          slug: '/amortization-calculator',
        },
        {
          title: 'Other Resources',
          icon: <IconLibrary color="var(--sky)" />,
          color: 'var(--sky)',
          subhead: 'What else should you know?',
          slug: '/resources',
        },
      ].map((item, index) => (
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

export default UsingTypescript;
