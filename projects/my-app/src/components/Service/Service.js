import React from 'react';
import style from './Service.module.scss';
import Rectangle from './Rectangle.png';

function Service() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info}>
          <div className={style.header}>
            <h2>Наши работы,на которых мы специализируемся</h2>
          </div>
          <div className={style.button}>
            <button className={style.btn}>Все услуги</button>
          </div>
        </div>
      </div>
      <div className={style.work}>
        <div className={style.service}>
          <img src={Rectangle} />
          <div className={style.head}>
            <h3 className={style.number}>01.</h3>
            <h3>Исследование и упаковка</h3>
          </div>
          <div className={style.description}>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>
          </div>
          <div className={style.link}>
            <a>Подробнее</a>
          </div>
        </div>

        <div className={style.service}>
          <img src={Rectangle} />
          <div className={style.head}>
            <h3 className={style.number}>01.</h3>
            <h3>Исследование и упаковка</h3>
          </div>
          <div className={style.description}>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>
          </div>
          <div className={style.link}>
            <a>Подробнее</a>
          </div>
        </div>

        <div className={style.service}>
          <img src={Rectangle} />
          <div className={style.head}>
            <h3 className={style.number}>01.</h3>
            <h3>Исследование и упаковка</h3>
          </div>
          <div className={style.description}>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>
          </div>
          <div className={style.link}>
            <a>Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
