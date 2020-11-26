import React from 'react';

import style from './Navbar.module.scss';

function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.topnav}>
          <div className={style.links}>
            <a href="#home">Главная</a>
            <a href="#projects">Наши проекты</a>
            <a href="#service">Услуги</a>
            <a href="#news">Новости</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>

        <div className={style.header}>
          <p>Передовая IT студия</p>
        </div>
        <div className={style.description}>
          <h1>Мы создаем легкие решения сложных задач и проблем</h1>
        </div>
        <div className={style.bttn}>
          <button>Наши проекты</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
