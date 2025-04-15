"use client";
import { Poster } from "@/interfaces";
import { useState, useEffect } from "react";

type propsType = {
    thisPoster: Poster;
}

// let posters: Poster[] = [];

export default function SaveFav({thisPoster}:propsType) {
    console.log("i saveFav", thisPoster);


    let savedPosters: Poster[] = [];

    const [posters, setPosters] = useState(savedPosters);


    useEffect(() => {
        savedPosters = JSON.parse(localStorage.getItem("savedPosters") || "[]");
        setPosters(savedPosters);
    },[])



    function SavePoster() {
        
        posters.push(thisPoster);

        alert("This poster has been saved");

        console.log("Poster array:", posters);

        localStorage.setItem("savedPosters", JSON.stringify(posters));

    }



    // console.log("Poster array:", Posters);

    return(
        <div>
            <button onClick={SavePoster}>Save</button>
        </div>
    )
}