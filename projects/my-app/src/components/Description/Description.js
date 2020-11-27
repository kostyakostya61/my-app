import React from 'react';
import style from './Description.module.scss';
import icon from './icon.jpg';

function Description() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.company}>
          <h2>Мы создаем мобильные приложения для круных корпораций</h2>
        </div>
        <div className={style.info}>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </p>
        </div>
        <div className={style.container_2}>
          <img src={icon} className={style.image} />
          <div className={style.function}>
            <h3 className={style.header}>Создание сайтов</h3>
            <p className={style.text}>
              Lorem Ipsum - это текст- "рыба", часто используе в печати и
              вэб-дизайне.
            </p>
          </div>

          <img src={icon} className={style.image} />
          <div className={style.function}>
            <h3 className={style.header}>Создание приложений</h3>
            <p className={style.text}>
              Lorem Ipsum - это текст- "рыба", часто используе в печати и
              вэб-дизайне.
            </p>
          </div>

          <img src={icon} className={style.image} />
          <div className={style.function}>
            <h3 className={style.header}>Создание баз данных</h3>
            <p className={style.text}>
              Lorem Ipsum - это текст- "рыба", часто используе в печати и
              вэб-дизайне.
            </p>
          </div>
        </div>

        <div className={style.container_3}>
          <button className={style.button}>Все услуги</button>
        </div>
      </div>
    </div>
  );
}

export default Description;
