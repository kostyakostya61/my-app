import React from 'react';
import logo from './logo.jpg';
import style from './Navbar.module.scss';

function Navbar() {
  return (
    <div className="container">
      <div className={style.Navbar}>
        <div className={style.Navigation}>
          <nav>
            <ul>
              <li className={style.main}>
                <p>Главная</p>
              </li>
              <li className={style.projects}>
                <p>Наши проекты</p>
              </li>
              <li className={style.service}>
                <p>Услуги</p>
              </li>
              <li className={style.news}>
                <p>Новости</p>
              </li>
              <li className={style.contacts}>
                <p>Контакты</p>
              </li>
            </ul>
          </nav>
          <hr className={style.hr}></hr>
          <div className={style.industry}>
            <p>Передовая IT индустрия</p>
          </div>
          <div className={style.description}>
            <h1>Мы создаем легкие решения сложных задач и проблем</h1>
          </div>
        </div>
        <button className={style.button}>Наши прокеты</button>
        <img src={logo} className={style.image}></img>
      </div>
    </div>
  );
}

export default Navbar;
