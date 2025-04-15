import styles from "./header.module.css";
import Link from "next/link";

export default function NavLinks() {

    return (   
        <ul className={styles.nav}>
            <li><Link className={styles.navItem} href="/">Home</Link></li>
            <li><Link className={styles.navItem} href="/allquotes">All Quotes</Link></li>
            <li><Link className={styles.navItem} href="/saved">Saved Posters</Link></li>
        </ul>       
    )
}