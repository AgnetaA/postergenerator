"use client";
import { Poster } from "@/interfaces";
import { useState } from "react";

type propsType = {
    thisPoster: Poster;
}

export const posters: Poster[] = [];

export default function SaveFav({thisPoster}:propsType) {
    console.log("i saveFav", thisPoster);


    function SavePoster() {
        console.log("clicked");
        
        posters.push(thisPoster);

        alert("This poster has been saved");

        console.log("Poster array:", posters);


    }



    // console.log("Poster array:", Posters);

    return(
        <div>
            <button onClick={SavePoster}>Save</button>
        </div>
    )
}