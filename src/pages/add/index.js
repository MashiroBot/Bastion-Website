import React from 'react';
import SiteHead from '../../components/SiteHead';
import ExternalLink from '../../components/ExternalLink.js';
import meta from './meta.json';
import versions from './versions.json';
import addons from './addons.json';
import './index.css';

class AddPage extends React.Component {
  render() {
    return (
      <div id='add'>
        <SiteHead
          title={ meta.title }
          description={ meta.description }
          image={ meta.image }
        />

        <div className='header'>
          <h1>Добавить маширо в дискорд</h1>
          <p>
            Добавь Маширо на свой сервер и дай ему потрясающие возможности.
          </p>
          <p>
            Здесь у тебя есть два разных варианта: ты можешь добавить
			Маширо на сервер Discord.
            <br />
			Или ты можешь купить одну из наших услуг для получения максимума возможностей!
          </p>
        </div>

        <div className='container'>
          {
            versions.map((version, i) => {
              return (
                <div className='version' key={ i }>
                  <ExternalLink to={ version.url }>
                    <div className='details'>
                      <img src={ version.image } height='128' width='128' alt='' />
                      <h4>{ version.title }</h4>
					  <p>{ version.description1 }</p>
                      <p>{ version.description }</p>
					  <p>{ version.description2 }</p>
					  <p>{ version.description3 }</p>
					  <p>{ version.description4 }</p>
					  <p>{ version.description5 }</p>
					  <p>{ version.description6 }</p>
					  <p>{ version.description7 }</p>
					  <p>{ version.description8 }</p>
					  <p>{ version.description9 }</p>
					  <p>{ version.description10 }</p>
					  <h4>{ version.priceold }</h4>
					  <p><small><small><small><small> { version.desco } </small></small></small></small></p>
                    </div>
                  </ExternalLink>
                </div>
              );
            })
          }
        </div>
		<span className='hr'></span>
         <h1><center>Дополнительные услуги</center></h1>
		<div className='container'>
          {
            addons.map((addon, i) => {
              return (
                <div className='version' key={ i }>
                  <ExternalLink to={ addon.url }>
                    <div className='details'>
                      <img src={ addon.image } height='128' width='128' alt='' />
                      <h4>{ addon.title }</h4>
                      <p>{ addon.description }</p>
					  <p>{ addon.description2 }</p>
					  <p>{ addon.description3 }</p>
					  <p>{ addon.description4 }</p>
					  <p>{ addon.description5 }</p>
					  <h4>{ addon.priceold }</h4>
					  <p><small><small><small><small> { addon.desco } </small></small></small></small></p>
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

export default AddPage;
