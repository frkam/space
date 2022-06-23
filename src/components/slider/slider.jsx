import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "../../styles/swiper.scss";
import styles from "./slider.module.scss";
import sliderImage from "../../images/sliderImage.png";
import "swiper/css";
import { useState } from "react";
import cn from "classnames";

const slides = [
  {
    header: "Как бизнесу сохранять IT-кадры на фоне кризиса",
    paragraph:
      "Инструменты, которые могут использовать компании для удержания сотрудников",
    button: "Подробнее",
    img: sliderImage,
    id: 1,
  },
  {
    header: "Как бизнесу сохранять IT-кадры на фоне кризиса",
    paragraph:
      "Инструменты, которые могут использовать компании для удержания сотрудников",
    button: "Подробнее",
    img: sliderImage,
    id: 2,
  },
  {
    header: "Как бизнесу сохранять IT-кадры на фоне кризиса",
    paragraph:
      "Инструменты, которые могут использовать компании для удержания сотрудников",
    button: "Подробнее",
    img: sliderImage,
    id: 3,
  },
];

export const Slider = () => {
  const [active, setActive] = useState(0);
  const swiperRef = useRef();

  const isActive = (i, active) => {
    return i === active
      ? cn(
          styles["swiper-pagination-bullet"],
          styles["swiper-pagination-bullet-active"]
        )
      : styles["swiper-pagination-bullet"];
  };

  return (
    <>
      <section className={styles.slider}>
        <Swiper
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.slider__slide}>
                <div className={styles.slide__text}>
                  <h1 className={styles.text__header}>{slide.header}</h1>
                  <p className={styles.text__paragraph}>{slide.paragraph}</p>
                  <button className={styles.text__button}>
                    {slide.button}
                  </button>
                  <div className={styles.pagination__wrap}>
                    {slides.map((_, i) => (
                      <div
                        onClick={() => swiperRef.current.slideTo(i++)}
                        className={isActive(i++, active)}
                      ></div>
                    ))}
                  </div>
                </div>
                <img
                  src={sliderImage}
                  alt="User"
                  className={styles.slide__image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
