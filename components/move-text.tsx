"use client";
import styles from "./saved.module.css";

export default function MoveText() {


    var toggle = 0;

    function MoveText() {
        console.log("clicked");

        if (toggle == 0) {
            document.querySelector(#quoteContainer).classList.add('containerUp');
            document.querySelector(#quoteContainer).classList.remove('quoteContainer');
            toggle = 1;
        }
        else if (toggle == 1) {
            document.querySelector(#quoteContainer).classList.add('quoteContainer');
            document.querySelector(#quoteContainer).classList.remove('containerUp');
            toggle = 0;
        }
    }

        return (
            <div className={styles.buttonDiv}>
                <button className={styles.moveButton} onClick={MoveText}>Move text Up/Down</button>
            </div>
        )
    }