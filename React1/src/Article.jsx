import styles from './Article.module.css';

export const Article = ({title, description}) => {
    return (
        <div className={styles.Article}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};