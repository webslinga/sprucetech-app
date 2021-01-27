import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (

      <footer className="text-dark-bg footer mt-auto pb-3">

        <div className="engagement-block">
          <div className="container-lg">

            <div className="row">
              <div className="col-12 col-lg-6">
                <form className="newsletter-form spruceform" action="" method="post">
                  <h4 className="text-dark-bg">Subscribe to our newsletter</h4>
                  <input type="text" placeholder="Enter email address"></input>
                  <button className="spruce-btn" type="button" name="button">Submit</button>
                </form>
              </div>
              <div className="col-12 col-lg-6 text-lg-end mt-5">
                <ul className="list-social">
                  <li>
                    <a href="#"><img src="/images/icons/044-social-icon-small-facebook@2x.png" alt="facebook icon" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/icons/045-social-icon-small-twitter@2x.png" alt="twitter icon" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/icons/046-social-icon-small-podcast@2x.png" alt="podcast icon" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/icons/047-social-media-small-linkedin@2x.png" alt="linkedin icon" /></a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-block">
          <div className="container-lg">

            <div className="row">
              <div className="col-8">
                <h2 className="text-dark-bg"><span>Contact Us</span></h2>
                <address>
                  1149 Bloomfield Ave., Suite G, Clifton, NJ 07012<br />
                  <a href="tel:+18622259300">(862)225-9300</a>
                </address>
                <button className="spruce-btn" type="button" name="button">Email Us</button>
              </div>
              <div className="col-4 text-end">
                <ul className="list-footer-links">
                  <li>
                    <a href="#">Industry Resources</a>
                  </li>
                  <li>
                    <a href="#">Procurement</a>
                  </li>
                  <li>
                    <a href="#">Job Opportunities</a>
                  </li>
                  <li>
                    <a href="#">News &amp; Events</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className="container-lg">

            <div className="row">
              <div className="col-12 mt-5">
                <small>&copy; 2020 Sprucetech. All Rights Reserved.</small>
              </div>
            </div>

          </div>
        </div>
      </footer>

    );
  }
}
