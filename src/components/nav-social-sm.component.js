import React, { Component } from 'react';

export default class NavbarSocialSm extends Component {
  render() {
    return (
      <div className="col-6 col-lg-12 d-flex">
        <div className="social-block ms-auto mt-5 d-md-block d-lg-none">
          <ul>
            <li>
              <a href="#"><img src="/images/icons/058-social-icon-facebook@2x.png" alt="facebook icon" /></a>
            </li>
            <li>
              <a href="#"><img src="/images/icons/060-social-icon-twitter@2x.png" alt="twitter icon" /></a>
            </li>
            <li>
              <a href="#"><img src="/images/icons/059-social-icon-linkedin@2x.png" alt="linkedin icon" /></a>
            </li>
            <li>
              <a href="#"><img src="/images/icons/061-social-icon-podcast@2x.png" alt="podcast icon" /></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
