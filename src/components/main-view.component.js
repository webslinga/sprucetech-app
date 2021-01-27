import React, { Component } from 'react';

import HeaderBlock from './header-block.component.js';
import MainBlock from './main-block.component.js';
import Footer from './footer.component.js';

export default class MainView extends Component {
  render() {
    return (
      <div>
        <HeaderBlock />
        <MainBlock />
        <Footer />
      </div>
    );
  }
}
