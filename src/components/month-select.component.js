import React, { Component } from 'react';

export default class MonthSelect extends Component {
  render() {
    return (

      <div className="month-select">
        <div className="container-lg">
          <ul>
            <li>
              <a href="#">January</a>
            </li>
            <li>
              <a href="#">February</a>
            </li>
            <li>
              <a href="#">March</a>
            </li>
            <li>
              <a href="#">April</a>
            </li>
            <li className="active">
              <a href="#">May</a>
            </li>
            <li>
              <a href="#">June</a>
            </li>
            <li>
              <a href="#">July</a>
            </li>
            <li>
              <a href="#">August</a>
            </li>
            <li>
              <a href="#">September</a>
            </li>
            <li>
              <a href="#">October</a>
            </li>
            <li>
              <a href="#">November</a>
            </li>
            <li>
              <a href="#">December</a>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
