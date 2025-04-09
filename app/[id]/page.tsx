
import { Quotes } from "@/interfaces";
import styles from "./page.module.css";
import Image from "next/image";



const API_KEY = process.env.IMAGE_API_KEY;

export default async function Posterizer({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ query: string}> }) {

    const { id } = await params;
    const { query } = await searchParams;
    
    //get the quote
    const quoteresp = await fetch(`https://dummyjson.com/quotes/${id}`);
    const quotedata = await quoteresp.json();


    //get images
    const imgresp = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=25`);
    const imgdata = await imgresp.json();

    const images = imgdata.hits;

    console.log(query, images);

    //get random image

    let num: number = 0;
    if(images.length < 1) {
        alert("No images found");
    }
    else {
        num = images.length;
    }
    

    const imgIndex: number = Math.floor(Math.random() * num);

    console.log("array length:", num, "random number:", imgIndex);

    //get info of array object with index of randomized number
    const randomImage = images[imgIndex];
    console.log("random photo", randomImage);

    

    

    return (
        <main id="main">
            
            <article className={styles.quoteContainer}>
                <q className={styles.quote}>{quotedata.quote}</q>
                <p className={styles.author}>~{quotedata.author}</p>

                <Image className={styles.photo}
                            src={images[imgIndex].largeImageURL}
                            alt={`Photo on the theme of ${query}`}
                            width={400}
                            height={300}
                        />
            </article>


         
        </main>

    )
}