import React from 'react';
import style from './Work.module.scss';
import logo from './logo.png';
import Subscribe from './Subscribe/Subscribe';

function Work() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.header}>
          <h2>Видео о нашей работе</h2>
        </div>
        <div className={style.head}>
          <p>Просто посмотрите,как мы работаем</p>
        </div>

        <div className={style.video}>
          <div className={style.player}>
            <img src={logo} />
            <div className={style.frame}>
              <p>Смотреть видео</p>
            </div>
            <button className={style.btn}>
                <div className={style.triangle}></div>
            </button>
          </div>
        </div>
        <Subscribe />
      </div>
    </div>

  );
}

export default Work;
