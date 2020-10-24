import React from 'react';
import styled from 'styled-components';
import sphere from '../../../../assets/sphere.svg';

const Figure = styled.div`
  width: 550px;
  height: 360px;
  position: absolute;
  bottom: 0;
  left: -150px;
  background-image: url(${sphere});
  background-repeat: no-repeat;
  background-size: 550px 610px;
  z-index: -1;
`

const Sphere = () => (
  <Figure />
)

export default Sphere;