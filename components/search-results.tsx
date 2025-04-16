import { useEffect, useState } from "react";
import { Quotes } from "@/interfaces";
import Link from "next/link";
import styles from "../app/search/page.module.css";


interface searchResultsProps {
    query: string | null;
}

export default function SearchResults({ query }: searchResultsProps) {

    const [quotes, setQuotes] = useState<Quotes[]>([]);

    useEffect(() => {
        if (!query) return; 
        const fetchQuotes = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/quotes?limit=0`);
                const data = await response.json();

                const allQuotes: Quotes[] = data.quotes;

                //filters out quotes with search query
                const quotes: Quotes[] = allQuotes.filter((allquotes) => {
                    return allquotes.quote.toLowerCase().includes(query.toLowerCase()) || allquotes.author.toLowerCase().includes(query.toLowerCase());
                });

                setQuotes(quotes || []);

            }
            catch (error) {
                console.error("Error fetching quotes: ", error);
            }
        };
        fetchQuotes();
    }, [query]);
    

    return (
        <section className={styles.section}>

            {quotes.length > 0 ? quotes.map((quotes, i) => (

                <article className={styles.quoteCard} key={i}>
                    <p className={styles.quote}>{quotes.quote}</p>
                    <p className={styles.author}>~{quotes.author}</p>
                    <Link className={styles.idLink} href={`/${quotes.id}?query=${query}`}>Posterize this ➜</Link>
                    
                </article>

            )) : <p>No results found, try another search</p>}

        </section>
    )
}