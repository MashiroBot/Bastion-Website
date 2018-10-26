import React from 'react';
import NavLink from '../NavLink.js';
import NavExLink from '../NavExLink.js';
import './index.css';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInnerNavVisible: false,
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  toggleInnerNav() {
    this.setState({
      isInnerNavVisible: !this.state.isInnerNavVisible
    });
  }

  render() {
    return (
      <nav
        style={{ display: this.props.isNavVisible ? '' : 'none' }}
        onClick={ this.props.onClick }
      >
        <div className='MainNav MainNav-left'>
          <ul className='OuterNav'>
            <NavLink name='Главная' to='/' className='min-960px' />
            <NavLink name='Возможности' to='/features' />
            <NavLink name='Команды' to='/commands' />
            <NavExLink name='Помощь &amp; Поддержка' to='https://discord.gg/xRc7Z7w' />
			<NavLink name='Спонсоры' to='/sponsors' />
            <li
              name='More'
              onMouseOver={ () => this.toggleInnerNav() }
              onMouseOut={ () => this.toggleInnerNav() }
            >
              <span
                className='dropdown'
                style={{ display: this.state.width > 960 ? '' : 'none' }}
              >
                Больше
              </span>
              <ul
                className='InnerNav'
                style={{ display: this.state.width <= 960 || this.state.isInnerNavVisible ? '' : 'none' }}
              >
                <NavLink name='FAQ' to='/faq' />
                <NavLink name='Инструменты' to='/tools' />
                <NavLink name='Отзывы' to='/testimonials' />
                <NavExLink name='Разработчик' to='https://vk.com/colinfl' />
                <NavExLink name='Статус' to='https://status.gachi.ru' />
              </ul>
            </li>
          </ul>
        </div>

        <div className='MainNav MainNav-right'>
          <ul>
            <NavExLink name='Зайти в дискорд' to='https://discord.gg/xRc7Z7w' />
            <NavLink name='Добавить в дискорд' to='/add' />
            <NavLink name='Донат' to='/donate' className='button primary' />
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainNav;
