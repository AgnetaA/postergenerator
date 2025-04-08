"use client";
import styles from "../app/[id]/page.module.css";
import { useSearchParams } from "next/navigation";


export default function GetImage() {

    const searchParams = useSearchParams(); 
    const query = searchParams.get("query");

    console.log("query:", query);
 

    return (
        <article className={styles.quoteContainer}>
      
            <div>Tillfällig</div>
        </article>
    )
}