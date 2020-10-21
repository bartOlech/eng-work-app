import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Model = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: #FFFFFF;
  opacity: .04;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: ${props => props.rotate};
  border-radius: ${props => props.radius};
`

const Figure = ({ width, height, top, left, rotate, isCircle }) => (
  <Model 
    width={width} 
    height={height} 
    top={top} 
    left={left} 
    rotate={rotate} 
    radius={isCircle ? '50%' : 0}
  />
)

Figure.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  rotate: PropTypes.string.isRequired,
  isCircle: PropTypes.bool,
}

Figure.defaultProps = {
  isCircle: false,
}

export default Figure;