import React from 'react';
import SiteHead from '../../components/SiteHead';
import showdown from 'showdown';
import ExternalLink from '../../components/ExternalLink.js';
import meta from './meta.json';
import faq from './faq.json';
import './index.css';

const converter = new showdown.Converter();

class FAQPage extends React.Component {
  questions() {
    let questions = [];
    for (let questionGroup in faq) {
      for (let question of faq[questionGroup]) {
        question.answer = converter.makeHtml(question.answer);
        questions.push(question);
      }
    }
    return questions;
  }

  render() {
    return (
      <div id='faq'>
        <SiteHead
          title={ meta.title }
          description={ meta.description }
          image={ meta.image }
        />

        <div className='header'>
          <h1>Часто задаваемые вопросы</h1>
          <p>
            У вас есть вопрос которого тут нет? Не беспокойтесь, направляйтесь <a>#support-mashiro</a> канал на <a
            href='https://discord.gg/xRc7Z7w' target='_blank'>Маширо Хаб</a>, и спрашивайте.
          </p>
        </div>

        <div className='container'>
            {
              this.questions().map((question, i) => {
                return (
                  <div className='question' key={ i }>
                    <h4>{ question.question }</h4>
                    <p dangerouslySetInnerHTML={{ __html: question.answer }} />
                    <img src={ question.image } alt='' />
                  </div>
                );
              })
            }
        </div>
      </div>
    );
  }
}

export default FAQPage;
