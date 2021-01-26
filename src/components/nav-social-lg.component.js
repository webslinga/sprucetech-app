import React, { Component } from 'react';

export default class NavbarSocialLg extends Component {
  render() {
    return (

      <div className="container-lg d-md-none d-lg-block">
        <div className="row">
          <div className="col">
            <div className="social-block d-flex justify-content-end">
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
        </div>
      </div>

    );
  }
}
