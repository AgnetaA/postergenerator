"use client";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import SearchFunction from "@/components/search-function";
import SearchResults from "@/components/search-results";

export default function QuoteResults() {
    const searchParams = useSearchParams(); 
    const query = searchParams.get("query");

    return (
        <main className={styles.main} id="main">

            <p className={styles.searchTerm}><span>Your Search: </span>{query}</p>
            <div className={styles.searchField}>
                <SearchFunction />
            </div>
            <SearchResults query={query}/>

        </main>
    )
}