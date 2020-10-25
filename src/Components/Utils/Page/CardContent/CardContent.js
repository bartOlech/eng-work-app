import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: ${props => props.width};
  min-height: 100px;
  border-radius: 15px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, .13);
`

const CardContent = ({ children, width }) => (
  <Container width={width}>
    {children}
  </Container>
)

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
}

export default CardContent;