"use client";
import { Poster } from "@/interfaces";
import { useState, useEffect } from "react";
import styles from "./saved.module.css";

type propsType = {
    thisPoster: Poster;
}

export default function SaveFav({ thisPoster }: propsType) {
    let savedPosters: Poster[] = [];

    const [posters, setPosters] = useState(savedPosters);

    useEffect(() => {
        savedPosters = JSON.parse(localStorage.getItem("savedPosters") || "[]");
        setPosters(savedPosters);
    }, [])


    function SavePoster() {
        posters.push(thisPoster);
        alert("This poster has been saved");

        localStorage.setItem("savedPosters", JSON.stringify(posters));
    }

    return (
        <div className={styles.buttonDiv}>
            <button className={styles.saveButton} onClick={SavePoster}>Save this poster!</button>
        </div>
    )
}