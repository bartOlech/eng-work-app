import React from 'react';
import styled from 'styled-components';

import Company from './Components/Company';
import User from './Components/User';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: linear-gradient(90deg, rgba(48,172,149,1) 0%, rgba(59,169,173,1) 100%);
`

const Header = () => (
  <Container>
    <Company />
    <User />
  </Container>
)

export default Header;