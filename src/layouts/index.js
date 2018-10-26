import React from 'react';
import SiteHead from '../components/SiteHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SiteBanner from '../components/SiteBanner';
import BackToTop from '../components/BackToTop';
import { siteMetadata } from '../../gatsby-config.js';
import './index.css';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <root>
        <SiteHead />
        <Header />
        <main>
          { this.props.children() }
        </main>
        <Footer />
        <SiteBanner />
        <BackToTop />
      </root>
    );
  }
}

export default DefaultLayout;
