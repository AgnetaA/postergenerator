
import { Quotes } from "@/interfaces";
import styles from "./page.module.css";

import Link from "next/link";
// import { useSearchParams } from "next/navigation";
import GetAllQuotes from "@/components/fetch-all-quotes";


export default async function AllQuotes() {
    

    return (
        <main id="main">
            <h2>All quotes</h2>

            <GetAllQuotes /> 

        </main>
    )
}