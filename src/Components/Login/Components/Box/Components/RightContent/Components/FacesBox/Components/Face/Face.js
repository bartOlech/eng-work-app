import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.div`
  background: url(${props => props.image});
  background-size: ${props=>props.size};
  width: ${props=>props.width};
  height: ${props=>props.height};
  position: absolute;
  top: ${props=>props.top};
  left: ${props=>props.left};
  border-radius: 50%;
`

const Face = ({image, size, width, height, top, left}) => {
  return (
    <Image left={left} top={top} height={height} width={width} image={image} size={size} />
  )
}

Face.propTypes = {
  image: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

export default Face;