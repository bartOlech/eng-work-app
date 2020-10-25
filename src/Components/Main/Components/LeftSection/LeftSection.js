import React from 'react';
import styled from 'styled-components';

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

const LeftSection = () => (
  <Container>
    <Text>Dopasowane osoby:</Text>
    <CardBox />
  </Container>
)

export default LeftSection;