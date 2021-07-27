import * as React from 'react';
import styled from 'styled-components';

import Header from './header';
import '../styles/global.css';

const LayoutStyles = styled.main`
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding: 50px 15px 15px 15px;
  min-height: calc(100vh - 200px);
`;
const FooterStyles = styled.footer`
  background-color: transparent;
  color: var(--footerTextColor);
`;
const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <LayoutStyles>{children}</LayoutStyles>
    <FooterStyles>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </FooterStyles>
  </>
);

export default Layout;
