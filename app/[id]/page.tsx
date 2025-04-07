import { Quotes } from "@/interfaces";
import styles from "./page.module.css";


export default async function Posterizer({ params }: { params: Promise<{ id: string }>}) {
    //get the quote
    const { id } = await params;

    const quoteresp = await fetch(`https://dummyjson.com/quotes/${id}`);
    const quotedata = await quoteresp.json();

    console.log(quotedata);

    //get a photo
    

    

  


    return (
        <main id="main">
            <article className={styles.quoteContainer}>
                    <q className={styles.quote}>{quotedata.quote}</q>
                    <p className={styles.author}>~{quotedata.author}</p>     
            </article>
        </main>

    )
}