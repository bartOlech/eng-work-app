import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Dots = styled.div`
  display: flex;
`
const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #3AAF9F;
  background: ${props => props.background};
  margin-right: 5px;
  margin-bottom: -1px;
`

const getLevel = (level) => {
  let dots = [];
  for (let i = 0; i < 5 ; i++) {
    dots.push(<Dot key={i} background={i < level ? '#3AAF9F' : '#fff'}></Dot>)
  }

  return dots;
}

const LevelDots = ({ levelOfMatch }) => (
  <Dots>
    {getLevel(levelOfMatch)}
  </Dots>
)

LevelDots.propTypes = {
  levelOfMatch: PropTypes.number.isRequired,
}

LevelDots.defaultProps = {
  level: 0,
}

export default LevelDots;