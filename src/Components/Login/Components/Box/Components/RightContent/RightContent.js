import React from 'react';
import styled from 'styled-components';
import FacesBox from './Components/FacesBox';
import LoginSection from './Components/LoginSection';

import PropTypes from 'prop-types';

const Main = styled.div`
  width: 750px;
  height: 100%;
  background: #fff;
  border-top-right-radius: 46px;
  border-bottom-right-radius: 46px;
`

const RightContent = ({ onLogin }) => {
  return (
    <Main>
      <FacesBox />
      <LoginSection onLogin={onLogin} />
    </Main>
  )
}

RightContent.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

export default RightContent;