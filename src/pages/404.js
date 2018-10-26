import React from 'react';
import Link from 'gatsby-link';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className='NotFoundPage-container'>
        <img
          src='https://mbot.gachi.ru/av.jpg'
          width='170'
          height='170'
        />
        <h1>Вы потерялись.</h1>
        <p>Пора возращаться обратно: <Link to='/'>Вернуться</Link>.</p>
      </div>
    );
  }
}

export default NotFoundPage;
