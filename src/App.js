import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';
import './App.css';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

function App() {
  return (
    <Layout>
      <Router>
        <div>Hallo Ilias</div>
      </Router>
    </Layout>
  );
}

export default App;
