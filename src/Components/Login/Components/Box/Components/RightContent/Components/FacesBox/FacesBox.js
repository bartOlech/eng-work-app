import React from 'react';
import styled from 'styled-components';
import Face from './Components/Face';
import Line from './Components/Line';

import face1 from '../../../../../../../../assets/faces/1.png';
import face2 from '../../../../../../../../assets/faces/2.png';
import face3 from '../../../../../../../../assets/faces/3.png';
import face4 from '../../../../../../../../assets/faces/4.png';
import face5 from '../../../../../../../../assets/faces/5.png';
import face6 from '../../../../../../../../assets/faces/6.png';
import face7 from '../../../../../../../../assets/faces/7.png';

const Container = styled.div`
  width: 100%;
  height: 220px;
  border-top-right-radius: 46px;
  position: relative;
`

const FacesBox = () => {
  return (
    <Container>
      <Line width='30px' top='102px' left='455px' rotate='rotate(88deg)' />
      <Line width='153px' top='135px' left='508px' rotate='rotate(173deg)' />
      <Line width='73px' top='55px' left='498px' rotate='rotate(174deg)' />
      <Line width='150px' top='47px' left='289px' rotate='rotate(188deg)' />
      <Line width='63px' top='71px' left='186px' rotate='rotate(135deg)' />
      <Line width='49px' top='82px' left='245px' rotate='rotate(75deg)' />
      <Line width='70px' top='85px' left='70px' rotate='rotate(31deg)' />
      <Face left='240px' top='10px' height='40px' width='40px' size='40px 40px' image={face1} />
      <Face left='450px' top='123px' height='50px' width='50px' size='50px 50px' image={face2} />
      <Face left='266px' top='111px' height='40px' width='40px' size='40px 40px' image={face3} />
      <Face left='580px' top='20px' height='60px' width='60px' size='60px 60px' image={face4} />
      <Face left='450px' top='40px' height='40px' width='40px' size='40px 40px' image={face5} />
      <Face left='669px' top='100px' height='40px' width='40px' size='40px 40px' image={face6} />
      <Face left='143px' top='90px' height='55px' width='55px' size='55px 55px' image={face7} />
      <Face left='30px' top='30px' height='40px' width='40px' size='40px 40px' image={face2} />
    </Container>
  )
}

export default FacesBox;