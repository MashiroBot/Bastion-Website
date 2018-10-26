import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.error(e);
  }
}

class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html { ...this.props.htmlAttributes } prefix='og: http://ogp.me/ns#'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            name='viewport'
            content={
              'width=device-width, user-scalable=no, shrink-to-fit=no,'
              + ' initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'
            }
          />

		  
          <meta
            name='keywords'
            content={
              'маширо, mashiro bot, дискорд, дискорд бот, бот, бот для дискорд музыка,'
                + ' валюта, топовый дискорд бот, лучший дискорд бот, боты для дискорда,'
                + ' боты для дискорда на русском, игры, веселье, администрирование, модерация, музыкальный бот для дискорда,'
                + ' поиск, игры, игровая стата, статистика, как добавить бота в дискорд'
            }
          />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name="twitter:site" content="@MashiroBot" />
          <meta name="twitter:creator" content="@ColinFL" />

          <meta property='og:site_name' content='Маширо бот' />
          <meta property='og:url' content='https://rubot.gachi.ru' />
          <meta property='og:image:width' content='1000' />
          <meta property='og:image:height' content='524' />
          <meta property='og:type' content='website' />

          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='shortcut icon' href='https://bot.gachi.ru/favicon.ico' />
          <link rel='icon' type='image/x-icon' href='https://bot.gachi.ru/favicon.ico' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#40bbfb' />
          <meta name='apple-mobile-web-app-title' content='Маширо дискорд бот' />
          <meta name='application-name' content='Маширо дискорд бот' />
          <meta name='msapplication-TileColor' content='#070a0c' />
          <meta name='theme-color' content='#070a0c' />

          { this.props.headComponents }
          { css }
        </head>

        <body { ...this.props.bodyAttributes }>
          { this.props.preBodyComponents }
          <div
            key={ 'body' }
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          { this.props.postBodyComponents }
        </body>
      </html>
    )
  }
};

export default HTML;
