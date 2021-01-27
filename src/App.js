import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainView from './components/main-view.component.js';
import AddEvent from './components/add-event.component.js';

function App() {
  return (
    <Router>
      <Route path="/" exact component={MainView} />
      <Route path="/add-event" exact component={AddEvent} />
    </Router>
  );
}

export default App;
