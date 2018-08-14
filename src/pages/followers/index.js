import React from 'react';
import SiteHead from '../../components/SiteHead';
import axios from 'axios';
import meta from './meta.json';
import ExternalLink from '../../components/ExternalLink.js';
import Loader from '../../components/Loader';
import './index.css';

class FollowersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      followers: []
    };
  }

  componentDidMount() {
    this.fetchInfo();
    this.fetchFollowers();
  }

  fetchInfo() {
    axios.get('https://romantic-cephalopod.glitch.me/')
      .then(res => {
        this.setState({
          info: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  fetchFollowers() {
    axios.get('https://romantic-cephalopod.glitch.me/followers')
      .then(res => {
        this.setState({
          followers: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let isInfoFetched = !!Object.keys(this.state.info).length;
    return (
      <div id='twitter'>
        <SiteHead
          title={ meta.title }
          description={ meta.description }
        />

        <div className='header'>
          <div className='self'>
            <img
              className='avatar'
              src='https://images-ext-2.discordapp.net/external/DegTsDA9BCeOPzmnwjwgW8cUjwwsqPw1Mx6w6IJe58A/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/267035345537728512/26d0905a682bf2ee436d50ff1168ded7.png'
              alt='Bastion Avatar'
              height='150'
              width='150'
            />
            <div className='details'>
              <ExternalLink to={
                isInfoFetched
                ? `https://twitter.com/${this.state.info.username}`
                : 'https://twitter.com/TheBastionBot'
              }>
                <div className='name'>{ isInfoFetched ? this.state.info.name : 'The Bastion Bot' }</div>
                <div className='username'>{ isInfoFetched ? `@${this.state.info.username}` : '@TheBastionBot' }</div>
              </ExternalLink>
              <div className='followers'>{ isInfoFetched ? `${this.state.info.followers_count} Followers` : '' }</div>
            </div>
          </div>
        </div>

        <div className='container'>
          {
            this.state.followers.length
            ?
              this.state.followers.map((user, i) => {
                return (
                  <div className='follower' key={ i }>
                    <ExternalLink to={ `https://twitter.com/${user.username}` }>
                      <div className='details'>
                        <div className='name'>{ user.name }</div>
                        <div className='username'>{ `@${user.username}` }</div>
                      </div>
                    </ExternalLink>
                  </div>
                );
              })
            :
              <Loader />
          }
        </div>
      </div>
    );
  }
}

export default FollowersPage;
