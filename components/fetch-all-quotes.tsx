"use client"
import { Quotes } from "@/interfaces";
import styles from "../app/allquotes/page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function GetAllQuotes() {
    const searchParams = useSearchParams();
    let param = searchParams.get("skip");

    let skip: number = 0;
    let next: number = 0;

    if (!param) {
        skip = 0;
    }
    else {
        skip = parseInt(param);
    }

    console.log("skip, next:", skip, next);

    const [allquotes, setQuotes] = useState<Quotes[]>([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/quotes?limit=10&skip=${skip}`);
                const data = await response.json();

                const allquotes: Quotes[] = data.quotes;

                console.log(allquotes);

                setQuotes(allquotes || []);

            }
            catch (error) {
                console.error("Error fetching quotes: ", error);
            }
        };

        fetchQuotes();
    }, [skip]);


    if (skip <= 0) {
        return (
            <section className={styles.quotesContainer}>
                {allquotes.length > 0 ? allquotes.map((quotes, i) => (
                    <article className={styles.quoteCard} key={i}>
                        <p className={styles.quote}>{quotes.quote}</p>
                        <p className={styles.author}>~{quotes.author}</p>
                    </article>
                )) : <p>We have run out of quotes...</p>}
                <div className={styles.linkContainer}>
                    <Link className={styles.idLinkNext} href={`/allquotes?skip=${skip + 10}`}>More Quotes 🡪</Link>
                </div>
            </section>
        );
    }
    else if (skip >= 1450) {
        return (
            <section className={styles.quotesContainer}>
                {allquotes.length > 0 ? allquotes.map((quotes, i) => (
                    <article className={styles.quoteCard} key={i}>
                        <p className={styles.quote}>{quotes.quote}</p>
                        <p className={styles.author}>~{quotes.author}</p>
                    </article>
                )) : <p>We have run out of quotes...</p>}
                <div className={styles.linkContainer}>
                    <Link className={styles.idLinkPrev} href={`/allquotes?skip=${skip - 10}`}>🡨 Previous</Link>
                </div>
            </section>
        )
    }
    else if (skip > 0) {
        return (
            <section className={styles.quotesContainer}>
                {allquotes.length > 0 ? allquotes.map((quotes, i) => (
                    <article className={styles.quoteCard} key={i}>
                        <p className={styles.quote}>{quotes.quote}</p>
                        <p className={styles.author}>~{quotes.author}</p>
                    </article>
                )) : <p>We have run out of quotes...</p>}
                <div className={styles.linkContainer}>
                    <Link className={styles.idLinkPrev} href={`/allquotes?skip=${skip - 10}`}>🡨 Previous</Link>
                    <Link className={styles.idLinkNext} href={`/allquotes?skip=${skip + 10}`}>More Quotes 🡪</Link>
                </div>
            </section>
        );
    }
}

