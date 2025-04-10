import styles from "./header.module.css";
import Link from "next/link";


export default function Header() {

    return (
        <header className={styles.header}>
            <Link href={`/`}><h1 className={styles.headerHeading}>Posterizer</h1></Link>
        </header>


    )
}