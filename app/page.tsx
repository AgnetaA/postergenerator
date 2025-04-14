
import styles from "./page.module.css";
import Link from "next/link";
import SearchFunction from "@/components/search-function";

export default function Home() {
  return (
    <main className={styles.main} id="main">
      <article className={styles.homePageQuoteBox}>
        <q className={`${styles.quote} ${styles.homePageQuote}`}>When a thing has been said, and said well, have no scruple. Take it and copy it.</q>
        <p className={`${styles.author} ${styles.homePageAuthor}`}>~Anatole France</p>
      </article>

      <article className={styles.quoteSearch}>
        <h2>Make a thoughtworthy poster with a quote!</h2>
        <SearchFunction />   
        <Link className={styles.mainPageLink} href="/allquotes">I just want to read the quotes!</Link>
      </article>
     
    </main>
  );
}
