import React from 'react';
import styled from 'styled-components';

import Header from '../Utils/Page/Header';
import LeftSection from './Components/LeftSection';

const Container = styled.div`

`
const MainContent = styled.div`
  margin: 40px 0 0 20px;
`

const Main = () => (
  <Container>
    <Header />
    <MainContent>
      <LeftSection />
    </MainContent>
  </Container>
)

export default Main;