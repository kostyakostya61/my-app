import React from 'react';
import style from './Work.module.scss';
import logo from './logo.png';
import Subscribe from './Subscribe/Subscribe';
import Button from './Button.png';

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
            <div className={style.btn}>
              <button>
                <div className={style.button_style}>
                  <img src={Button} />
                  <p>Смотреть видео</p>
                </div>
              </button>
            </div>

            <img src={logo} />
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  );
}

export default Work;
