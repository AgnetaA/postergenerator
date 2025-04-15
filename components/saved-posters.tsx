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


    // function SavePoster() {
    //     posters.push(thisPoster);
    //     alert("This poster has been saved");

    //     localStorage.setItem("savedPosters", JSON.stringify(posters));
    // }

    function DeletePoster() {
        if (confirm("Are you sure you want to delete this poster?")) {
            console.log("yes");
        } else {
            console.log("no");
        }
    };

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
                    <button className={styles.deleteButton} onClick={DeletePoster}>Delete</button>
                </section>

            )) : <p>No saved posters</p>}
        </div>
    )
}

