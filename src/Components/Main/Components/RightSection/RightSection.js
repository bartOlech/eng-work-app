import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardBox from './Components/CardBox';

const Container = styled.div`
 width: 35%;
`
const Text = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.8em;
  color: #262F3F;
  padding: 20px 0 20px 0;
`

const RightSection = ({ secondMatchData }) => (
  <Container>
    <Text>Może cię zainteresować:</Text>
    <CardBox
      mainMatch={secondMatchData.mainMatch}
      userName={secondMatchData.userName}
      matchBy={secondMatchData.matchBy}
      place={secondMatchData.place}
    />
  </Container>
)

RightSection.propTypes = {
  secondMatchData: PropTypes.object.isRequired,
}

export default RightSection;