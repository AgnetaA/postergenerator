import GetAllQuotes from "@/components/fetch-all-quotes";
import styles from "./page.module.css";

export default async function AllQuotes() {
    
    return (
        <main id="main" className={styles.main}>
            <h2 className={styles.heading}>All quotes</h2>
            <GetAllQuotes /> 
        </main>
    )
}