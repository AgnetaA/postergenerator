import styles from "./header.module.css";
import Link from "next/link";

export default function Navigation() {



    return (
        <nav className={styles.nav}>

            <Link className={styles.navItem} href="/">Home</Link>
            <Link className={styles.navItem} href="/allquotes">All Quotes</Link>

        </nav>
    )
}