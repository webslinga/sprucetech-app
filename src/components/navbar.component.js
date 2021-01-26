import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (

        <div className="container-lg">
          <div className="row">

            <div className="col-6 col-lg-12">

              <nav className="spruce-navigation navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                      <a href="#" className="nav-link" aria-current="page">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Public Information</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Program &amp; Incentives</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Strategic Industry Support</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Careers</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link"><img src="/images/icons/036-search-symbol-green@2x.png" alt="search icon" /></a>
                    </li>
                  </ul>
                </div>
              </nav>

            </div>

          </div>
        </div>

    );
  }
}
