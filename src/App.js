import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component.js';
import NavbarSocialLg from './components/nav-social-lg.component.js';
import NavbarSocialSm from './components/nav-social-sm.component.js';
import Hero from './components/hero.component.js';
import MonthSelect from './components/month-select.component.js';
import EventsList from './components/events-list.component.js';
import Footer from './components/footer.component.js';

function App() {
  return (
    <Router>
      <header>
        <NavbarSocialLg />
        <Navbar />
        <NavbarSocialSm />
      </header>
      <main>
        <Hero />
        <div className="content-block">
          <MonthSelect />
        </div>

        <div className="container-lg">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <EventsList />
            </div>
            <div className="col-1"></div>
          </div>
        </div>

      </main>
      <Footer />
    </Router>
  );
}

export default App;
