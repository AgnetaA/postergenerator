"use client";

import styles from "./search.module.css";
import { useState } from "react";

// import React from "react";



export default function SearchFunction () {

  const[searchQuery, setSearchQuery] = useState<string>('');

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.key === "Enter" && searchQuery.length > 0) {
      console.log("damn");
    }
    else if (event.key === "Enter") {
      alert("Please don't send an empty search");
  }
  }


    return(
        
        <form className={styles.quoteSearchForm}>
          <label>Search quotes: </label>
          <input type="text" id="search" name="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeydown} />



          {/* value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeydown} */}
        </form>
    )
}