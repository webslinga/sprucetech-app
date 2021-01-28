import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainView from './components/main-view.component.js';
import AddEvent from './components/add-event.component.js';
import EditDeleteEvents from './components/edit-delete-events.component.js';
import EditEvent from './components/edit-event.component.js';

function App() {
  return (
    <Router>
      <Route path="/" exact component={MainView} />
      <Route path="/add-event" exact component={AddEvent} />
      <Route path="/edit-delete-events" exact component={EditDeleteEvents} />
      <Route path="/edit-event/:id" exact component={EditEvent} />
    </Router>
  );
}

export default App;
