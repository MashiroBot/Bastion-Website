import React from 'react';
import SiteHead from '../../components/SiteHead';
import ExternalLink from '../../components/ExternalLink.js';
import meta from './meta.json';
import sponsors from './sponsors.json';
import './index.css';

class SponsorsPage extends React.Component {
  render() {
    return (
      <div id='sponsors'>
        <SiteHead
          title={ meta.title }
          description={ meta.description }
          image={ meta.image }
        />

        <div className='header'>
          <h1>Спонсоры</h1>
          <p>
            Это удивительные компании и люди, которые спонсируют<strong> Маширо Бот</strong> и позволяют нам работать вечно.
          </p>
        </div>

        <div className='container'>
          {
            sponsors.map((sponsor, i) => {
              return (
                <div className='sponsor' key={ i }>
                  <ExternalLink to={ sponsor.url }>
                    <div className='image'>
                      <img
                        src={ sponsor.image }
                        width='150'
                        height='150'
                        alt='Sponsor Logo'
                      />
                    </div>
                    <div className='details'>
                      <h4>{ sponsor.title }</h4>
                      <p>{ sponsor.description }</p>
                    </div>
                  </ExternalLink>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default SponsorsPage;
