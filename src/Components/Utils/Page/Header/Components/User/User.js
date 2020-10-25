import React from 'react';
import styled from 'styled-components';

import userIco from '../../../../../../assets/user.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
`
const Image = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${props => props.ico});
  background-size: 40px 40px;
  background-repeat: no-repeat;
  padding-left: 15px;
`
const Name = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  color: #fff;
  padding-right: 25px;
`

const User = () => (
  <Container>
    <Image ico={userIco} />
    <Name>Bart</Name>
  </Container>
)

export default User;