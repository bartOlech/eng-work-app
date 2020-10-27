import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardContent from '../../../../../Utils/Page/CardContent';

import userIco from '../../../../../../assets/user.svg';
import dotsIco from '../../../../../../assets/ellipsis.svg';

const Container = styled.div`
  width: 100%;
  padding-left: 25px;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -7px;
`
const Text = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: .9em;
  color: #262F3F;
  padding-bottom: 8px;
`
const User = styled.div`
  display: flex;
  margin-bottom: 15px;
`
const Name = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: .85em;
  color: #A0A6B1;
  padding-right: 10px;
`
const Image = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${props => props.image});
  background-size: 20px 20px;
`
const Row = styled.div`
  display: flex;
`
const GreyText = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: .9em;
  color: #A0A6B1;
  padding-left: 5px;
`
const CheckButton = styled.div`
  width: 100px;
  height: 30px;
  background: #4DB6AC;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-top: 5px;
`
const DotsButton = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${dotsIco});
  background-size: 25px 25px;
  position: absolute;
  right: 20px;
  top: 6px;
`

const CardBox = ({ mainMatch, userName, matchBy, place }) => (
    <CardContent justifyContent='start' width='474px'>
      <Container>
        <DotsButton />
        <Header>
          <Text style={{ fontWeight: 600, fontSize: '1em' }}>
            {mainMatch}
          </Text>
          <User>
            <Name>{userName}</Name>
            <Image image={userIco} />
          </User>
        </Header>
        <Row>
          <Text>Dopasowane po:</Text>
          <GreyText>{matchBy}</GreyText>
        </Row>
        <Row>
          <Text>Miejsce:</Text>
          <GreyText>{place}</GreyText>
        </Row>
        <CheckButton>Sprawdź</CheckButton>
      </Container>
    </CardContent>
)

CardBox.propTypes = {
  mainMatch: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  matchBy: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
}

CardBox.defaultProps = {
  mainMatch: '',
  userName: '',
  matchBy: '',
  place: '',
}

export default CardBox;