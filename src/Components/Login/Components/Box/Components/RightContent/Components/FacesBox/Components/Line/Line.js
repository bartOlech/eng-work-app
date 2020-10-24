import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CustomLine = styled.div`
  width: ${props => props.width};
  height: 1px;
  background: #DBDBDB;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: ${props => props.rotate};
`

const Line = ({ width, top, left, rotate }) => {
  return (
    <CustomLine width={width} top={top} left={left} rotate={rotate} />
  )
}

Line.propTypes = {
  width: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  rotate: PropTypes.string.isRequired,
}

export default Line;