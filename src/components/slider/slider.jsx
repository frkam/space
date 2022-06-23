import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/swiper.scss";
import styles from "./slider.module.scss";
import sliderImage from "../../images/sliderImage.png";

export const Slider = () => {
  return (
    <section className={styles.slider}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className={styles.slider__swiper}
        loop={true}
      >
        <SwiperSlide>
          <div className={styles.slider__slide}>
            <div className={styles.slide__text}>
              <h1 className={styles.text__header}>
                Как бизнесу сохранять <br />
                IT-кадры на фоне кризиса
              </h1>
              <p className={styles.text__paragraph}>
                Инструменты, которые могут использовать компании <br />
                для удержания сотрудников
              </p>
              <button className={styles.text__button}>Подробнее</button>
            </div>
            <img src={sliderImage} alt="User" className={styles.slide__image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider__slide}>
            <div className={styles.slide__text}>
              <h1 className={styles.text__header}>
                Как бизнесу сохранять <br />
                IT-кадры на фоне кризиса
              </h1>
              <p className={styles.text__paragraph}>
                Инструменты, которые могут использовать компании <br />
                для удержания сотрудников
              </p>
              <button className={styles.text__button}>Подробнее</button>
            </div>
            <img src={sliderImage} alt="User" className={styles.slide__image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider__slide}>
            <div className={styles.slide__text}>
              <h1 className={styles.text__header}>
                Как бизнесу сохранять <br />
                IT-кадры на фоне кризиса
              </h1>
              <p className={styles.text__paragraph}>
                Инструменты, которые могут использовать компании <br />
                для удержания сотрудников
              </p>
              <button className={styles.text__button}>Подробнее</button>
            </div>
            <img src={sliderImage} alt="User" className={styles.slide__image} />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
