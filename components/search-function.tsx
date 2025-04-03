import styles from "./search.module.css";



export default function SearchFunction () {


    return(
        
        <form className={styles.quoteSearchForm}>
          <label>Search quotes: </label>
          <input type="text" id="search" name="search" />
        </form>
    )
}