import React from 'react';
import Link from 'gatsby-link';
import ExternalLink from '../ExternalLink.js';
import './index.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <svg
          id='Footer-background'
          preserveAspectRatio='none'
          viewBox='0 0 1920 330'
          version='1.1'
        >
          <path
            fill='#202225'
            fillOpacity='0.2'
            d='M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z'
          />
        </svg>

        <div className='Footer-content'>
          <div className='Footer-navigation'>
            <div className='Footer-card'>
              <h3>Ресурсы</h3>
              <ExternalLink to='https://discord.gg/xRc7Z7w'>
                Помощь &amp; Поддержка
              </ExternalLink>
              <Link to='/tools'>Инструменты</Link>
              <Link to='/faq'>FAQ</Link>
              <ExternalLink to='https://status.gachi.ru'>
                Состояние платформы
              </ExternalLink>
            </div>
            <div className='Footer-card'>
              <h3>Сторонники</h3>
              <Link to='/sponsors'>Спонсоры</Link>
              <Link to='/testimonials'>Отзывы</Link>
              <ExternalLink to='https://vk.com/colinfl'>
                Автор
              </ExternalLink>
            </div>
            <div className='Footer-card'>
              <h3>Социальное</h3>
              <ExternalLink to='https://discord.gg/xRc7Z7w'>
                Discord
              </ExternalLink>
              <ExternalLink to='https://twitter.com/DiscordMashiro'>
                Twitter
              </ExternalLink>
              <ExternalLink to='https://vk.com/staffq'>
                Vkontakte
              </ExternalLink>
            </div>
            <div className='Footer-card'>
              <h3>Донат</h3>
              <ExternalLink to='https://qiwi.me/mashiroup'>
                QIWI
              </ExternalLink>
			  <ExternalLink to='https://anime.gachi.ru/donate.php'>
                FreeKassa
              </ExternalLink>
              <ExternalLink to='https://paypal.me/mashirobot'>
                PayPal
              </ExternalLink>
            </div>
          </div>
          <span className='hr'></span>
          <div className='Footer-meta'>
            <div className='Footer-meta-copyright'>
			<ExternalLink to='https://github.com/MashiroBot/Bastion-Website'>
              Mashiro Discord
			</ExternalLink>
            </div>
			<div className='Footer-meta-copyright'>
                Copyright &copy; 2018 - The Bastion Bot Project
			</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
