import React from 'react';
import style from './Projects.module.scss';
import Example from './Example.png';

function Projects() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.header}>
          <h2>Наши проекты</h2>
        </div>
        <div className={style.description}>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </p>
        </div>
        <div className={style.images}>
          <div className={style.img}>
            <img src={Example} />
          </div>
          <div className={style.img}>
            <img src={Example} />
          </div>
          <div className={style.img}>
            <img src={Example} />
          </div>
          <div className={style.img}>
            <img src={Example} />
          </div>
          <div className={style.img}>
            <img src={Example} />
          </div>
        </div>

        <div className={style.button}>
          <button>Все проекты</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
