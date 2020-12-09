import React from 'react';
import Nav from './components/Nav';
import Home from './pages/home';
import GlobalStyle from './components/GlobalStyles';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Nav />
        <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
