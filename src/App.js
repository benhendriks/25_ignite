import React from 'react';
import GlobalStyle from './components/GlobalStyles';
import Home from './pages/home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
