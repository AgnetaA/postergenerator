"use client";
import { useEffect, useState } from "react";
import { Poster } from "@/interfaces";


export default function SavedPosters() {

let savedPosters: Poster[] = [];

const [posters, setPosters] = useState(savedPosters);
    

useEffect(() => {
    savedPosters = JSON.parse(localStorage.getItem("savedPosters") || "[]");
    setPosters(savedPosters);
},[])


    console.log("saved posters, local storage:", savedPosters);
    console.log("posters", posters);


    return (
        <div>The saved ones</div>
    )
}