// import React from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;