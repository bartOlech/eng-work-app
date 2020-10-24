import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  
`

const Figure = styled.div`
  width: 150px;
  height: 134px;
  position: absolute;
  background: #E35D6A;
  top: 0;
  right: 0;
  z-index: -2;
`
const TriangleFigure = styled.div`
  width: 0;
  height: 0;
  border-left: 120px solid transparent;
  border-right: 120px solid transparent;
  border-top: 280px solid #E35D6A;
  position: absolute;
  right: 64px;
  top: 8px;
  transform: rotate(45deg);
  z-index: -2;
`

const Triangle = () => (
  <Container>
    <Figure />
    <TriangleFigure />
  </Container>
)

export default Triangle;