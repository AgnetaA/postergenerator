"use client";

import styles from "./search.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchFunction() {

  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    
    if (event.key === "Enter" && searchQuery.length > 0) {
      router.push(`/search?query=${searchQuery}`);
    }
    else if (event.key === "Enter") {
      alert("Please don't send an empty search");
    }
  }

  return (

    <div className={styles.quoteSearchForm}>
      <label htmlFor="search">Search quotes: </label>
      <input type="text" id="search" name="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeydown} />
    </div>

  )
}