import { useEffect, useState } from "react";
import { ARTICLES_API } from "../../constants/api";
import styles from "./article.module.scss";
import user from "../../images/user.svg";
import dropdown from "../../images/dropdown.svg";

export const Articles = () => {
  const [data, setData] = useState(null);
  const [isAuthorFilterOpened, setIsAuthorFilterOpened] = useState(false);
  const [authorFilter, setAuthorFilter] = useState(null);

  useEffect(() => {
    const getArticlesData = async () => {
      const resp = await fetch(ARTICLES_API);
      const data = await resp.json();
      setData(data);
    };
    getArticlesData();
  }, []);

  const articlesData = data?.articles?.filter(
    (article) => article.author === authorFilter
  );

  const authorsData = Array.from(
    new Set(
      data?.articles
        ?.filter((article) => article.author)
        .map((article) => article.author)
    )
  );

  return (
    <section className={styles.articles}>
      <div className={styles.articles__filters}>
        <div className={styles.filters__author}>
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
          <button
            className={styles.author__dropdown}
            onClick={() => setIsAuthorFilterOpened((prev) => !prev)}
          >
            <img src={dropdown} alt="dropdown" />
          </button>
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
        <div>От и до</div>
      </div>
      <div className={styles.articles__container}>
        {authorFilter &&
          articlesData?.map((article) => {
            const date = new Date(Date.parse(article?.publishedAt))
              .toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
              .replace(".", "")
              .replace(" г", "");

            const title = article?.title.replace(/\uFFFD/g, "");

            const paragraph = article?.description.replace(/\uFFFD/g, "");

            return (
              <div key={article.content} className={styles.articles__article}>
                <span className={styles.article__date}>{date}</span>
                <h1 className={styles.article__title}>{title}</h1>
                <p className={styles.article__paragraph}>{paragraph}</p>
                {article.author && (
                  <div className={styles.article__author}>
                    {article?.author}
                  </div>
                )}
              </div>
            );
          })}
        {!authorFilter &&
          data?.articles?.map((article) => {
            const date = new Date(Date.parse(article?.publishedAt))
              .toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
              .replace(".", "")
              .replace(" г", "");

            const title = article?.title.replace(/\uFFFD/g, "");

            const paragraph = article?.description.replace(/\uFFFD/g, "");

            return (
              <div key={article.content} className={styles.articles__article}>
                <span className={styles.article__date}>{date}</span>
                <h1 className={styles.article__title}>{title}</h1>
                <p className={styles.article__paragraph}>{paragraph}</p>
                {article.author && (
                  <div className={styles.article__author}>
                    {article?.author}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};
