import { useEffect, useState } from "react";
import { ARTICLES_API } from "../../constants/api";
import styles from "./article.module.scss";

export const Articles = () => {
  const [articlesData, setArticlesData] = useState(null);

  useEffect(() => {
    const getArticlesData = async () => {
      const resp = await fetch(ARTICLES_API);
      const data = await resp.json();
      setArticlesData(data);
    };
    getArticlesData();
  }, []);

  console.log(articlesData);

  return (
    <section className={styles.articles}>
      <div className={styles.articles__filters}>
        <div>Dropdown</div>
        <div>От и до</div>
      </div>
      <div className={styles.articles__container}>
        {articlesData?.articles?.map((article) => {
          let date = new Date(Date.parse(article?.publishedAt))
            .toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
            .replace(".", "")
            .replace(" г", "");

          return (
            <div key={article.content} className={styles.articles__article}>
              <span className={styles.article__date}>{date}</span>
              <h1 className={styles.article__title}>{article?.title}</h1>
              <p className={styles.article__paragraph}>
                {article?.description}
              </p>
              {article.author && (
                <div className={styles.article__author}>{article?.author}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
