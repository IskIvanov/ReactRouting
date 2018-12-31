import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Home from './Home'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Route path="./" componet={Home} />
    </div>
  </BrowserRouter>
);

export default App;