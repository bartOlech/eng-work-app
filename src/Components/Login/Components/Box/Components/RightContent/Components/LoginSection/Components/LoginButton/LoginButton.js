import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import facebookIco from '../../../../../../../../../../assets/facebook-black.svg';
import googleIco from '../../../../../../../../../../assets/google-black.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 115px;
  margin-top: 10px;
`
const Button = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #BFBFBF;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${props => props.ico});
  background-size: 30px 30px;
`

const LoginButton = ({ onLogin }) => {

  return (
    <Container>
      <Button onClick={() => onLogin('facebook')}>
        <Image ico={facebookIco} />
      </Button>
      <Button onClick={() => onLogin('google')}>
        <Image ico={googleIco} />
      </Button>
    </Container>
  )
}

LoginButton.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

export default LoginButton;