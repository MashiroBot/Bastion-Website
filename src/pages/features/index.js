import React from 'react';
import SiteHead from '../../components/SiteHead';
import showdown from 'showdown';
import ExternalLink from '../../components/ExternalLink.js';
import meta from './meta.json';
import features from './features.json';
import './index.css';

const converter = new showdown.Converter();

class FeaturesPage extends React.Component {
  render() {
    return (
      <div id='features'>
        <SiteHead
          title={ meta.title }
          description={ meta.description }
          image={ meta.image }
        />

        <div className='header'>
          <h1>Основные возможности</h1>
          <p>
            Маширо - Многофункциональный дискорд бот который может
			кучу всяких вещей и ее функции расширяются ежедневно.
            Маширо может все что когда-либо понадобится большинству людей.
			Ниже приведены основные особенности бота для того что бы ознакомиться
			стоит перейти к списку команд.
            Если вы считаете что Маширо не хватает какой-либо функции <a
            href='https://discord.gg/xRc7Z7w'
            target='_blank'>отправьте предложение</a> и мы добавим ее в Маширо 
			как можно скорее.
          </p>
        </div>

        <div className='container'>
          {
            features.map((feature, i) => {
              if (i % 2 == 0) {
                return (
                  <div className='feature left' key={ i }>
                    <div className='image'>
                      <img src={ feature.image } alt='Feature Screenshot' />
                    </div>
                    <div className='details'>
                      <h4>{ feature.title }</h4>
                      <p
                        dangerouslySetInnerHTML={{ __html: converter.makeHtml(feature.description) }}
                      />
                    </div>
                  </div>
                );
              }
              else {
                return (
                  <div className='feature right' key={i}>
                    <div className='details'>
                      <h4>{ feature.title }</h4>
                      <p
                        dangerouslySetInnerHTML={{ __html: converter.makeHtml(feature.description) }}
                      />
                    </div>
                    <div className='image'>
                      <img src={ feature.image } alt='Feature Screenshot' />
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    );
  }
}

export default FeaturesPage;
