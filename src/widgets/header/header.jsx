import logo from "../../images/logo.svg";
import styles from "./header.module.scss";
import mail from "../../images/mail.svg";
import phone from "../../images/phone.svg";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { BREAKPOINT_MOBILE_L } from "../../constants/breakpoints";

export const Header = () => {
  const width = useWindowWidth();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <a href="#">
            <img src={logo} alt="logo" className={styles.header__logo} />
          </a>
          <div className={styles.header__contacts}>
            {width > BREAKPOINT_MOBILE_L ? (
              <>
                <a href="tel:88000000000" className={styles.contacts__tel}>
                  8 800 000 00 00
                </a>
                <a
                  href="mailto:sales@logo.ru"
                  className={styles.contacts__mail}
                >
                  sales@logo.ru
                </a>
              </>
            ) : (
              <>
                <a href="tel:88000000000" className={styles.contacts__tel}>
                  <img src={phone} alt="phone" />
                </a>
                <a
                  href="mailto:sales@logo.ru"
                  className={styles.contacts__mail}
                >
                  <img src={mail} alt="mail" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
