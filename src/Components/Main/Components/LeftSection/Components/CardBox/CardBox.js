import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardContent from '../../../../../Utils/Page/CardContent';
import LevelDost from './Components/LevelDots';

import heartIco from '../../../../../../assets/like.svg';
import messageIco from '../../../../../../assets/message.svg';

const Container = styled.div`
  width: 70%;
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: -7px;
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
  align-items: flex-end;
`
const Place = styled.div`
  display: flex;
`
const Buttons = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
`
const IcoButton = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${props => props.ico});
  background-size: 30px 30px;
  cursor: pointer;
`
const Line = styled.div`
  width: 80%;
  height: 1px;
  background: #E8E8E8;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: -16px;
`

const CardBox = ({ mainMatch, additionalMatch, userName, image, levelOfMatch, place, isLast }) => (
  <Container>
    <CardContent justifyContent='space-around' width='650px'>
      <LeftContent>
        <User>
          <Name>{userName}</Name>
          <Image image={image}></Image>
        </User>
        <MainMatched>
          <Title>Główne dopasowanie</Title>
          <DarkTitle>{mainMatch}</DarkTitle>
        </MainMatched>
      </LeftContent>
      <CenterContent>
        <div>
          <Title>Dopasowane słowa kluczowe:</Title>
          <CategoryBox>
            {
              additionalMatch.map((el, index) => (
                <DarkTitle key={index}>{el}</DarkTitle>
              ))
            }
          </CategoryBox>
        </div>
        <Title style={{ marginBottom: '-27px' }}>Poziom dopasowania:</Title>
        <LevelDost levelOfMatch={levelOfMatch} />
      </CenterContent>
      <RightContent>
        <Place>
          <Title style={{ paddingRight: '5px' }}>Miejsce:</Title>
          <DarkTitle>{place}</DarkTitle>
        </Place>
        <Buttons>
          <IcoButton ico={heartIco} />
          <IcoButton ico={messageIco} />
        </Buttons>
      </RightContent>
    </CardContent>
    {
      !isLast ? (
        <Line />
      ) : null
    }
  </Container>
  
)

CardBox.propTypes = {
  mainMatch: PropTypes.string.isRequired,
  additionalMatch: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  levelOfMatch: PropTypes.number.isRequired, 
  place: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
}

export default CardBox;