import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main} id="main">
      <article className={styles.homePageQuote}>
        <q className={`${styles.quote} ${styles.homePageQuote}`}>When a thing has been said, and said well, have no scruple. Take it and copy it.</q>
        <p className={`${styles.author} ${styles.homePageAuthor}`}>~Anatole France</p>
      </article>

      <article className={styles.quoteSearch}>
        <h2 >Make a thoughtworthy poster with a quote!</h2>

        <form className={styles.quoteSearchForm}>
          <label>Search quotes: </label>
          <input type="text" id="search" name="search" />
        </form>
        
        <Link className={styles.mainPageLink} href="#">Just take me to all the quotes!</Link>
      </article>

      
    </main>
  );
}
