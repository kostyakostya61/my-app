import React from 'react';
import style from './Footer.module.scss';
import letter from './images/letter.png';
import phone from './images/phone.png';
import map from './images/map.png';
import arrow from './images/arrow.png';

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.footer}>
          <div className={style.contact_info}>
            <h3>Контактная информация</h3>
            <div className={style.contacts}>
              <img src={letter} />
              <p>test@test.ru</p>
            </div>
            <div className={style.contacts}>
              <img src={phone} />
              <p>+8 777 555 66 99</p>
            </div>
            <div className={style.contacts}>
              <img src={map} />
              <p>Москва, Бульвар Ленина 33</p>
            </div>
          </div>

          <div className={style.main_links}>
            <h3>Основные ссылки</h3>
            <div className={style.major}>
              <img src={arrow} />
              <p>Главная</p>
            </div>
            <div className={style.major}>
              <img src={arrow} />
              <p>Наши проекта</p>
            </div>
            <div className={style.major}>
              <img src={arrow} />
              <p>Наши услуги</p>
            </div>
            <div className={style.major}>
              <img src={arrow} />
              <p>Контакты</p>
            </div>
          </div>

          <div className={style.main_links}>
            <h3>Наши проекты</h3>
            <div className={style.major}>
              <img src={arrow} />
              <p>РосНано</p>
            </div>
            <div className={style.major}>
              <img src={arrow} />
              <p>Сколково</p>
            </div>
            <div className={style.major}>
              <img src={arrow} />
              <p>Проект "Восток"</p>
            </div>
            <div className={style.major}>
              <img src={arrow} />
              <p>ТЭЦ Калининграда</p>
            </div>
          </div>

          <div className={style.main_links}>
            <h3>Социальные сети</h3>
            <div className={style.major}>
              <img src={arrow} />
              <p>VK.com</p>
            </div>
            <div className={style.major}>
              <img src={arrow} />
              <p>Instagram</p>
            </div>
            <div className={style.major}>
              <img src={arrow} />
              <p>Facebook</p>
            </div>
            <div className={style.major}>
              <img src={arrow} />
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.rights}>
        <p>(с) 2019. Все права защищены.</p>
      </div>
    </div>
  );
}

export default Footer;
