import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainView from './components/main-view.component.js';

function App() {
  return (
    <Router>
      <Route path="/" exact component={MainView} />
    </Router>
  );
}

export default App;
