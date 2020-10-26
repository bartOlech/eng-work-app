import React from 'react';
import styled from 'styled-components';

import CardContent from '../../../../../Utils/Page/CardContent';

import userIco from '../../../../../../assets/user.svg';

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const User = styled.div`
  display: flex;
  align-items: center;
`
const Name = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1em;
  color: #76849D;
  padding-right: 12px;
`
const Image = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${props => props.image});
  background-size: 30px 30px;
`
const Title = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: .9em;
  color: #76849D;
  font-weight: 500;
  padding-bottom: 5px;
`
const MainMatched = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const CategoryBox = styled.div`
  display: flex;
`
const DarkTitle = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: .95em;
  color: #262F3F;
`
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Place = styled.div`
  display: flex;
`
const Buttons = styled.div`
  display: flex;
`

const CardBox = () => (
  <CardContent width='650px'>
    <LeftContent>
      <User>
        <Name>Mateusz</Name>
        <Image image={userIco}></Image>
      </User>
      <MainMatched>
        <Title>Główne dopasowanie</Title>
        <DarkTitle>Język angielski</DarkTitle>
      </MainMatched>
    </LeftContent>
    <CenterContent>
      <div>
        <Title>Dopasowane słowa kluczowe:</Title>
        <CategoryBox>
          <DarkTitle>Piłka nozna,</DarkTitle>
          <DarkTitle>koszykówka,</DarkTitle>
          <DarkTitle>język angielski</DarkTitle>
        </CategoryBox>
      </div>
      <Title>Poziom dopasowania:</Title>

    </CenterContent>
    <RightContent>
      <Place>
        <Title style={{ paddingRight: '5px' }}>Miejsce:</Title>
        <DarkTitle>Kraków</DarkTitle>
      </Place>
      <Buttons>
        <div>btn</div>
        <div>btn</div>
      </Buttons>
    </RightContent>
  </CardContent>
)

export default CardBox;