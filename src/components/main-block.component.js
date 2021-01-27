import React, { Component } from 'react';
import Hero from './hero.component.js';
import MonthSelect from './month-select.component.js';
import EventsList from './events-list.component.js';

export default class MainBlock extends Component {
  render() {
    return (
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
    );
  }
}
