import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from '../Utils/Page/Header';
import LeftSection from './Components/LeftSection';
import RightSection from './Components/RightSection';

const Container = styled.div`

`
const MainContent = styled.div`
  display: flex;
  margin: 40px 0 0 20px;
`

const Main = ({ mainMatchData, secondMatchData }) => (
  <Container>
    <Header />
    <MainContent>
      <LeftSection mainMatchData={mainMatchData} />
      <RightSection secondMatchData={secondMatchData} />
    </MainContent>
  </Container>
)

Main.propTypes = {
  mainMatchData: PropTypes.array.isRequired,
  secondMatchData: PropTypes.object.isRequired,
}

export default Main;