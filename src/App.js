import React from 'react';
import LoginPage from './Containers/LoginPage';
import styled from 'styled-components';

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <PageLayout>
      <LoginPage />
    </PageLayout>
  );
}

export default App;
