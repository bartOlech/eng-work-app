import React from 'react';
import Login from './Components/Login';
import styled from 'styled-components';

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <PageLayout>
      <Login />
    </PageLayout>
  );
}

export default App;
