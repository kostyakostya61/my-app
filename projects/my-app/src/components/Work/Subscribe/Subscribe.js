import React from 'react';
import style from './Subscribe.module.scss';

function Subscribe() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.header}>
          <h3>Подпишитесь на нашу рассылку</h3>
        </div>
        <div className={style.head}>
          <p>Полезные статьи, акции, новости - получите все это сейчас!</p>
        </div>
        <div className>
          <input
            placeholder={'Ваш email'}
            className={style.input}
            type={'search'}
          />
          <button className={style.button}>Подписаться</button>
        </div>

        <div className={style.warning}>
          <p>Мы не шлем спам, и передаем никому ваши данные.</p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
