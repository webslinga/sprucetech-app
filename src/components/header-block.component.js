import React, { Component } from 'react';
import Navbar from './navbar.component.js';
import NavbarSocialLg from './nav-social-lg.component.js';
import NavbarSocialSm from './nav-social-sm.component.js';

export default class HeaderBlock extends Component {
  render() {
    return (
      <header>
        <NavbarSocialLg />
        <Navbar />
        <NavbarSocialSm />
      </header>
    );
  }
}
