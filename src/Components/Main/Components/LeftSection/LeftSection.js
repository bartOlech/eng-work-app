import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardBox from './Components/CardBox';

const Container = styled.div`
  width: 65%;
`
const Text = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.8em;
  color: #262F3F;
  padding: 20px 0 20px 0;
`

const LeftSection = ({ mainMatchData }) => (
  <Container>
    <Text>Dopasowane osoby:</Text>
    {
      mainMatchData.map((el, index) => (
        <CardBox
          key={index}
          mainMatch={el.mainMatch}
          additionalMatch={el.additionalMatch}
          userName={el.userName}
          image={el.image}
          levelOfMatch={el.levelOfMatch}
          place={el.place}
          isLast={mainMatchData.length - 1 === index}
        />
      ))
    }
  </Container>
)

LeftSection.propTypes = {
  mainMatchData: PropTypes.array.isRequired
}

export default LeftSection;