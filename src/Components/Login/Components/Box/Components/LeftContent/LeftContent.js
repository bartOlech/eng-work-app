import React from 'react';
import styled from 'styled-components';

import Figure from './Components/Figure';

const Main = styled.div`
  width: 450px;
  height: 100%;
  background: linear-gradient(90deg, rgba(48,172,149,1) 0%, rgba(59,169,173,1) 100%);
  border-top-left-radius: 46px;
  border-bottom-left-radius: 46px;
`
const CustomFigure = styled.div`
  width: 0;
  height: 0;
  border-top: ${props => props.borderTop};
  border-right: ${props => props.borderRight};
  opacity: .03;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: ${props => props.rotate};
`
const Title = styled.h2`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 700;
  font-size: 2.2em;
  color: #fff;
  text-align: center;
  padding-top: 118px;
`

const Subtitle = styled.h2`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 300;
  font-size: 1.8em;
  color: #fff;
  text-align: center;
`

const LeftContent = () => {
  return (
    <Main>
      <Title>
        Witaj w aplikacji Learnby
      </Title>
      <Subtitle>Zaloguj się</Subtitle>
      <CustomFigure 
        borderTop='150px solid #fff'
        borderRight='450px solid transparent'
        top='0'
        left='0'
        rotate='rotate(0deg)'
      />
       <CustomFigure 
        borderTop='50px solid #fff'
        borderRight='150px solid transparent'
        top='100px'
        left='255px'
        rotate='rotate(-150deg)'
      />
      <Figure 
        width='20px'
        height='20px'
        top='520px'
        left='20px'
        rotate='rotate(40deg)'
      />
      <Figure 
        width='25px'
        height='25px'
        top='480px'
        left='329px'
        rotate='rotate(21deg)'
      />
      <Figure 
        width='40px'
        height='40px'
        top='302px'
        left='110px'
        rotate='rotate(70deg)'
      />
      <Figure 
        width='30px'
        height='30px'
        top='240px'
        left='320px'
        rotate='rotate(30deg)'
      />
      <Figure 
        width='20px'
        height='20px'
        top='230px'
        left='60px'
        rotate='rotate(55deg)'
      />
      <Figure 
        width='75px'
        height='75px'
        top='402px'
        left='244px'
        rotate='rotate(40deg)'
      />
      <Figure 
        width='25px'
        height='25px'
        top='582px'
        left='344px'
        rotate='rotate(40deg)'
      />
       <Figure 
        width='30px'
        height='30px'
        top='480px'
        left='204px'
        rotate='rotate(50deg)'
      />
      <Figure 
        width='30px'
        height='30px'
        top='350px'
        left='184px'
        rotate='rotate(0deg)'
        isCircle
      />
      <Figure 
        width='50px'
        height='50px'
        top='295px'
        left='212px'
        rotate='rotate(0deg)'
        isCircle
      />
      <Figure 
        width='25px'
        height='25px'
        top='383px'
        left='384px'
        rotate='rotate(0deg)'
        isCircle
      />
      <Figure 
        width='30px'
        height='30px'
        top='150px'
        left='124px'
        rotate='rotate(0deg)'
        isCircle
      />
      <Figure 
        width='35px'
        height='35px'
        top='455px'
        left='104px'
        rotate='rotate(0deg)'
        isCircle
      />
       <Figure 
        width='35px'
        height='35px'
        top='55px'
        left='390px'
        rotate='rotate(0deg)'
        isCircle
      />
    </Main>
  )
}

export default LeftContent;