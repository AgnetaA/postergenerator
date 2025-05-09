"use client";
import { useEffect, useState } from "react";
import { Poster } from "@/interfaces";
import styles from "./saved.module.css";
import Image from "next/image";


export default function SavedPosters() {

    let savedPosters: Poster[] = [];

    const [posters, setPosters] = useState(savedPosters);

    useEffect(() => {
        savedPosters = JSON.parse(localStorage.getItem("savedPosters") || "[]");
        setPosters(savedPosters);
    }, []);
    

    const DeletePoster = (e:React.FormEvent, i:number, savedPosters:Poster[]) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this poster?")) {

            posters.splice(i, 1);  
           
            localStorage.setItem("savedPosters", JSON.stringify(posters));
                  
            savedPosters = JSON.parse(localStorage.getItem("savedPosters") || "[]");
            setPosters(savedPosters);
        } 
    }

    return (

        <div>
            {posters.length > 0 ? posters.map((posters, i) => (

                <section className={styles.poster} key={i}>
                    <Image className={styles.photo}
                        src={posters.imgURL}
                        alt={`Poster photo`}
                        width={400}
                        height={300}
                    />
                    <article className={styles.quoteContainer}>
                        <p className={styles.quote}>{posters.quoteText}</p>
                        <p className={styles.author}>~{posters.quoteAuthor}</p>
                    </article>
                    <button className={styles.deleteButton} onClick={(e) => DeletePoster(e, i, savedPosters)}>Delete</button>
                </section>

            )) : <p>No saved posters could be found</p>}
        </div>
    )
}

