import React from 'react';
import LoginPage from './Containers/LoginPage';
import store from './Redux/store';

import styled from 'styled-components';
import { Provider } from 'react-redux';

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <Provider store={store}>
      <PageLayout>
        <LoginPage />
      </PageLayout>
    </Provider>
  );
}

export default App;
