import styles from "./loader.module.css";


export default function Loader() {


    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <span className={styles.loaderspan}>
                    <div className={styles.loader}>
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