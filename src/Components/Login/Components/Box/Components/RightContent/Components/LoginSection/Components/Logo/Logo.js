import React from 'react';
import styled from 'styled-components';

import facebook from '../../../../../../../../../../assets/facebook.svg';
import google from '../../../../../../../../../../assets/google.svg';
import faceImage from '../../../../../../../../../../assets/faces/4.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`
const RoundBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${props => props.background};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const Image = styled.div`
  background-image: url(${props => props.image});
  width: 35px;
  height: 35px;
  background-size: 35px 35px;
  background-repeat: no-repeat;
`
const FaceImage = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${faceImage});
  background-size: 60px 60px;
  border-radius: 50%;
  margin-left: -10px;
  margin-right: -10px;
  z-index: 0;
`

const Logo = () => {
  return (
    <Container>
      <RoundBox background='#1066FF'>
        <Image image={facebook} />
      </RoundBox>
      <FaceImage />
      <RoundBox background='#E35D6A'>
        <Image image={google} />
      </RoundBox>
    </Container>
  )
}

export default Logo;