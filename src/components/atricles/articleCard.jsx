import styles from "./articleCard.module.scss";

export const ArticleCard = ({ article }) => {
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
    <div key={article?.content} className={styles.articles__article}>
      <span className={styles.article__date}>{date}</span>
      <h1 className={styles.article__title}>{title}</h1>
      <p className={styles.article__paragraph}>{paragraph}</p>
      {article?.author && (
        <div className={styles.article__author}>{article?.author}</div>
      )}
    </div>
  );
};
