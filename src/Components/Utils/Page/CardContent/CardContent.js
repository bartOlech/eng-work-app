import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: ${props => props.width};
  min-height: 140px;
  border-radius: 15px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, .13);
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 15px 0 15px 0;
  box-sizing: border-box;
  &::before {
    content: '';
    width: 4px;
    height: 23px;
    background: #3AAF9F;
    position: absolute;
    left: -5px;
    top: 13px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
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