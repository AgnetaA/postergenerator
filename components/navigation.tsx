"use client";
import styles from "./header.module.css";
import NavLinks from "./nav-links";

export default function Navigation() {

    //makes hamburger menu tabbable
    const Checking = (e: any) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            document.getElementById("checkboxLabel")?.click();           
        }
    }

    return (
        <div className={styles.navContainer}>
            <input className={styles.sideMenu} type="checkbox" id="side-menu" />
            <label className={styles.hamb} id="checkboxLabel" htmlFor="side-menu" tabIndex={0} onKeyDown={Checking} >
                <span className={styles.hambLine}></span>
            </label>
            <nav>
                <NavLinks />
            </nav>
        </div>


    )
}