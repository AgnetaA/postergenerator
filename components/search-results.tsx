import { useEffect, useState } from "react";
import { Quotes } from "@/interfaces";
// import Link from "next/link";


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




                const quotes: Quotes[] = data.quotes;




                //FUNKTION för att gallra ut resultat
               


                setQuotes(quotes || []);


                console.log(quotes);


            }
            catch (error) {
                console.error("Error fetching quotes: ", error);
            }
        };
        fetchQuotes();
    }, [query]);




    return (
        <section>
            {query}

            {quotes.length > 0 ? quotes.map((quotes, i) => (

                <article key={i}>
                    
                    <p><span>{quotes.id}: </span>{quotes.quote}</p>
                </article>


            )) : <p>No results found, try another search</p>}





        </section>
    )
}