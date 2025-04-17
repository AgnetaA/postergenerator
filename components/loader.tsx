import styles from "./loader.module.css";
import mountains from "../public/mountains.jpg";
import Image from "next/image";

export default function Loader() {


    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <span className={styles.loaderspan}>
                    <div className={styles.loader}>
                        <Image
                            className={styles.mountainimg}
                            src={mountains}
                            alt="loader"
                            width={130}
                            height={100}
                        />
                        <div>
                            <p className={styles.p1}>Hi there, hello!</p>
                            <p className={styles.p2}>~Ryan George</p>
                        </div>
                    </div>
                </span>
            </section>
        </main>
    )
}