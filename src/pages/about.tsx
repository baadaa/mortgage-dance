// If you don't want to use TypeScript you can delete this file!
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

const AboutPage: React.FC<PageProps> = ({ location }) => {
  const currentPath = location.pathname;
  return (
    <Layout path={currentPath}>
      <Seo title="About Mortgage Dance" />
      <HeadingStyles>About Mortgage Dance</HeadingStyles>
      <div
        style={{
          maxWidth: '850px',
          margin: '3rem auto 0',
          lineHeight: 1.6,
        }}
      >
        <h2>Disclaimer: don't trust me—I'm no expert.</h2>
        <p>
          I am not a mortgage expert, and have no qualification whatsoever to
          give anybody any advice on mortgage. All the content and calculation
          formulas are collected on the internet—primarily for my own needs. I'm
          so uneducated in this matter, I needed to collect resources. This site
          is the ongoing effort to do just that.
        </p>
        <h3>I knew nothing about mortgage</h3>
        <p>
          At forty I became a homeowner for the first time. It was an exciting
          change but also a very stressful one. Mortgage is such a complicated
          process full of intimidating jargons, and often I felt inadequate to
          walk into this huge financial commitment.
        </p>
        <p>
          Actually, I had just started working for a mortgage company—only a few
          months prior—which made it feel even more ironic that I'm so ignorant
          on this topic. Although my role as a design director had nothing to do
          with mortgage process itself, I still felt like I needed to understand
          more.
        </p>
        <h3>I still don't know anything</h3>
        <p>
          Knowing little to nothing can make one feel powerless and anxious.
          Like,{' '}
          <em>
            what if I get taken advantage of? What if I make an irredeemable
            mistake? Oh, only if I knew someone that I can rely on!
          </em>
        </p>
        <p>
          While I'm still largely illiterate in mortgage in general, I do feel
          better now that I have more references to go back to. It'd be great if
          somebody else—<em>you</em>—might also find this site useful.{' '}
          <u>
            Just remember—I am not an expert, and whatever you find on this site
            should be taken with a grain of salt
          </u>
          .
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
