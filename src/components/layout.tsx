import * as React from 'react';
import styled from 'styled-components';

import Header from './header';
import '../styles/global.css';

type layoutProp = {
  path?: string;
};
const LayoutStyles = styled.main`
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding: calc(var(--nav-height) + 50px) 15px 15px 15px;
  min-height: calc(100vh - 200px);
`;
const FooterStyles = styled.footer`
  background-color: transparent;
  position: fixed;
  bottom: 15px;
  right: 15px;
  color: var(--footerTextColor);
  font-size: 0.75rem;
  opacity: 0.5;
  a {
    color: var(--plum800);
  }
  &:hover {
    opacity: 1;
  }
`;
const Layout: React.FC<layoutProp> = ({ path = '', children }) => (
  <>
    <Header path={path} />
    <LayoutStyles>{children}</LayoutStyles>
    <FooterStyles>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://bald.design">B</a>
    </FooterStyles>
  </>
);

export default Layout;
