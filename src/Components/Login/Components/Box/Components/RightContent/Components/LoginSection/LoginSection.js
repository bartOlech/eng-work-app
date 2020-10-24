import React from 'react';
import styled from 'styled-components';
import Logo from './Components/Logo';
import LoginButtons from './Components/LoginButton';

import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 360px;
  border-bottom-right-radius: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MainText = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #2F3332;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  width: 350px;
  padding-top: 20px;
`
const Text = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #2F3332;
  font-weight: 600;
  font-size: 15px;
  padding-top: 10px;
`

const LoginSection = ({ onLogin }) => {
  return (
    <Container>
      <Logo />
      <MainText>
        Zaloguj się za pomocą konta społecznościowego
      </MainText>
      <Text>
        Pozwoli to natychmiast dopasować osoby z podobnymi zainteresowaniami
      </Text>
      <Text style={{ paddingTop: '25px' }}>
        Zaloguj się przez:
      </Text>
      <LoginButtons onLogin={onLogin} />
    </Container>
  )
}

LoginSection.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

export default LoginSection;