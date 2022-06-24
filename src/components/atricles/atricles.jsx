import { forwardRef, useEffect, useRef, useState } from "react";
import { ARTICLES_API } from "../../constants/api";
import styles from "./articles.module.scss";
import user from "../../images/user.svg";
import dropdown from "../../images/dropdown.svg";
import clear from "../../images/clear.svg";
import { ArticleCard } from "./articleCard";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import Input from "../UI/datepickerInput";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/datepicker.scss";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

const CustomInput = forwardRef((props, ref) => {
  return <Input {...props} ref={ref} />;
});

export const Articles = () => {
  const [articleData, setArticleData] = useState(null);
  const [isAuthorFilterOpened, setIsAuthorFilterOpened] = useState(false);
  const [authorFilter, setAuthorFilter] = useState(null);
  const [dateFilterFrom, setDateFilterFrom] = useState(null);
  const [dateFilterTo, setDateFilterTo] = useState(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const getArticlesData = async () => {
      const resp = await fetch(ARTICLES_API);
      const data = await resp.json();
      setArticleData(data);
    };
    getArticlesData();
  }, []);

  useEffect(() => {
    const closeDropdownOnClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAuthorFilterOpened(false);
      }
    };
    document.addEventListener("click", closeDropdownOnClickOutside);
    return () => {
      document.removeEventListener("click", closeDropdownOnClickOutside);
    };
  }, [dropdownRef]);

  const articlesData = articleData?.articles
    ?.filter((article) => {
      if (article.author && authorFilter) {
        return article.author === authorFilter;
      } else if (!article.author && authorFilter) {
        return false;
      }
      return true;
    })
    .filter((article) => {
      const publishedAt = Number(new Date(article.publishedAt));
      if (dateFilterFrom && dateFilterTo) {
        return dateFilterFrom < publishedAt && publishedAt < dateFilterTo;
      } else if (dateFilterFrom) {
        return dateFilterFrom < publishedAt;
      } else if (dateFilterTo) {
        return publishedAt < dateFilterTo;
      }
      return true;
    });

  const authorsData = Array.from(
    new Set(
      articleData?.articles
        ?.filter((article) => article.author)
        .map((article) => article.author)
    )
  );

  return (
    <section className={styles.articles}>
      <div className="container">
        <div className={styles.articles__filters}>
          <div className={styles.filters__author} ref={dropdownRef}>
            <div className={styles.author__author}>
              <img
                src={user}
                alt="User"
                className={styles["author__user-image"]}
              />
              <span className={styles.author__name}>
                {authorFilter ? authorFilter : "Выбор автора"}
              </span>
            </div>
            <div className={styles.author__buttons}>
              <button
                className={styles.author__dropdown}
                onClick={() => setIsAuthorFilterOpened((prev) => !prev)}
              >
                <img src={dropdown} alt="dropdown" />
              </button>
              {authorFilter && (
                <button
                  onClick={() => setAuthorFilter(null)}
                  className={styles.author__clear}
                >
                  <img src={clear} alt="X" />
                </button>
              )}
              <div className={styles.author__authors}>
                {isAuthorFilterOpened &&
                  authorsData.map((author) => {
                    return (
                      <button
                        key={author}
                        className={`${styles.authors__author} ${
                          author === authorFilter
                            ? styles["authors__author--current"]
                            : ""
                        }`}
                        onClick={() => setAuthorFilter(author)}
                      >
                        {author}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className={styles.filters__date}>
            <label htmlFor="from" className={styles.date__label}>
              От
              <DatePicker
                selected={dateFilterFrom}
                onChange={(date) => setDateFilterFrom(Number(date))}
                locale="ru"
                customInput={<CustomInput inputRef={inputRef} />}
                className="datepicker"
              />
            </label>
            <span>—</span>
            <label htmlFor="to" className={styles.date__label}>
              До
              <DatePicker
                selected={dateFilterTo}
                onChange={(date) => setDateFilterTo(Number(date))}
                locale="ru"
                customInput={<CustomInput inputRef={inputRef} />}
                className="datepicker"
              />
            </label>
          </div>
        </div>
        {articlesData?.length > 0 && (
          <div className={styles.articles__container}>
            {articlesData?.map((article) => {
              return <ArticleCard article={article} key={article.title} />;
            })}
          </div>
        )}
        {articlesData?.length === 0 && (
          <p className={styles["articles__not-found"]}>
            По вашему запросу ничего не найдено.
          </p>
        )}
      </div>
    </section>
  );
};
