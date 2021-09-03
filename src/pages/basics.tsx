// TODO: Add content

import React from 'react';
import { PageProps } from 'gatsby';

import styled from 'styled-components';

import Layout from '../components/layout';
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

const BasicsPage: React.FC<PageProps> = ({ location }) => {
  const currentPath = location.pathname;
  return (
    <Layout path={currentPath}>
      <Seo title="Mortgage Basics" />
      <HeadingStyles>Mortgage Basics</HeadingStyles>
      Under development
    </Layout>
  );
};

export default BasicsPage;
