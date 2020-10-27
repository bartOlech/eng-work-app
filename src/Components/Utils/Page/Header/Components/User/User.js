import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
  display: flex;
  align-items: center;
`
const Image = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${props => props.ico});
  background-size: 40px 40px;
  background-repeat: no-repeat;
  padding-left: 15px;
`
const Name = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  color: #fff;
  padding-right: 25px;
`

const User = ({ name, image }) => (
  <Container>
    <Image ico={image} />
    <Name>{name}</Name>
  </Container>
)

const mapStateToProps = (state) => ({
  name: state.user.name,
  image: state.user.image
})

export default connect(mapStateToProps)(User);