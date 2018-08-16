import React from 'react';
import Link from 'gatsby-link';
import SiteHead from '../../components/SiteHead';
import axios from 'axios';
import moment from 'moment';
import meta from './meta.json';
import ExternalLink from '../../components/ExternalLink.js';
import Loader from '../../components/Loader';
import './index.css';

class DonorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patrons: [],
      formerDonors: []
    };
  }

  componentDidMount() {
    this.fetchPatrons();
    this.fetchFormerDonors();
  }

  fetchPatrons() {
    axios.get('https://heather-seat.glitch.me/patreon')
      .then(res => {
        this.setState({
          patrons: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  fetchFormerDonors() {
    axios.get('https://heather-seat.glitch.me/former')
      .then(res => {
        this.setState({
          formerDonors: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div id='twitter'>
        <SiteHead
          title={ meta.title }
          description={ meta.description }
        />

        <div className='header'>
          <h1>Donors</h1>
          <p>
            These are all the people who have donated and shared their
            appreciation for the continous development of The Bastion Bot
            Project and kept it alive.
          </p>
          <p>
            If you also want to share your appreciation and get cool rewards,
            all while supporting the development of Bastion, you can <Link
            to='/donate'>donate</Link> too.
          </p>
        </div>

        <div className='container'>
          {
            Object.keys(this.state.patrons).length
            ?
              Object.values(this.state.patrons).filter(patron => !patron.declined_since).map((patron, i) => {
                return (
                  <div className='patron donor' key={ i }>
                    <div className='details'>
                      <div className='name'>{ patron.discord_tag }</div>
                      <div className='duration'>{ `Patron since ${moment(patron.patron_since).toNow(true)}` }</div>
                    </div>
                  </div>
                );
              })
            :
              <Loader />
          }
        </div>
        <div className='container'>
          {
            Object.keys(this.state.formerDonors).length
            ?
              Object.values(this.state.formerDonors).map((donor, i) => {
                return (
                  <div className='former donor' key={ i }>
                    <div className='details'>
                      <div className='name'>{ donor.discord_tag }</div>
                      <div className='duration'>{ `Last donated ${moment(donor.last_donated).toNow(true)} ago` }</div>
                    </div>
                  </div>
                );
              })
            :
              ''
          }
        </div>
      </div>
    );
  }
}

export default DonorsPage;
