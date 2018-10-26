import React from 'react';
import SiteHead from '../../components/SiteHead';
import ExternalLink from '../../components/ExternalLink.js';
import meta from './meta.json';
import methods from './methods.json';
import './index.css';

class DonatePage extends React.Component {
  render() {
    return (
      <div id='donate'>
        <SiteHead
          title={ meta.title }
          description={ meta.description }
          image={ meta.image }
        />

        <div className='header'>
          <h1>Пожертвовать маширо</h1>
          <p>
            Поддерживайте развитие Маширо и поддерживайте его навсегда, пожертвовав нам.
          </p>
          <p>
            Ваши пожертвования обеспечат развитие Маширо Бота и мы будем уверены, что этот проект будет активным навсегда.
          </p>
        </div>

        <div className='container'>
          {
            methods.map((method, i) => {
              return (
                <div
                  className='method'
                  key={ i }
                  title={ `${method.title} - ${method.url}` }
                >
                  <ExternalLink to={ method.url }>
                    <div className='image'>
                      <img
                        src={ method.image }
                        width='150'
                        alt='Donation Method Logo'
                      />
                    </div>
                    <div className='details'>
                      <p>{ method.description }</p>
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

export default DonatePage;
