import styles from "./footer.module.scss";
import logo from "../../images/logo-white.svg";
import vk from "../../images/vk.svg";
import telegram from "../../images/telegram.svg";
import youtube from "../../images/youtube.svg";
import twitter from "../../images/twitter.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles["footer__main-container"]}`}>
        <div className={styles.footer__container}>
          <a href="#">
            <img src={logo} alt="logo" className={styles.footer__logo} />
          </a>
          <div className={styles.footer__pages}>
            <a href="#" className={styles.footer__link}>
              Готовые решения
            </a>
            <a href="#" className={styles.footer__link}>
              О нас
            </a>
            <a href="#" className={styles.footer__link}>
              Блог
            </a>
            <a href="#" className={styles.footer__link}>
              Контакты
            </a>
          </div>
        </div>
        <div className={styles.footer__container}>
          <p className={styles.footer__copyright}>© ООО «Лого», 2008—2022</p>
          <div className={styles.footer__social}>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className={styles.footer__link}
            >
              <img src={telegram} alt="telegram" />
            </a>
            <a
              href="https://vk.com"
              target="_blank"
              rel="noreferrer"
              className={styles.footer__link}
            >
              <img src={vk} alt="vk" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className={styles.footer__link}
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className={styles.footer__link}
            >
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
