import styles from "./page.module.css";
import Image from "next/image";
import { Poster } from "@/interfaces";
import SaveFav from "@/components/save-fav";
import Link from "next/link";


const API_KEY = process.env.IMAGE_API_KEY;

export default async function Posterizer({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ query: string }> }) {

    const { id } = await params;
    const { query } = await searchParams;

    //get the quote
    const quoteresp = await fetch(`https://dummyjson.com/quotes/${id}`);
    if (!quoteresp.ok) {
        return(<main className={styles.error}><p>Error {quoteresp.status}: {quoteresp.statusText}</p><span>🤪</span></main>)    
    } 
    const quotedata = await quoteresp.json();

    //get images
    const imgresp = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=100`);
    if (!imgresp.ok) {
        return(<main className={styles.error}><p>Error {imgresp.status}: {imgresp.statusText}</p><span>🤪</span></main>)    
    } 
    const imgdata = await imgresp.json();

    let images = imgdata.hits;


    //get random image
    let num: number = 0;
    if (images.length < 1) {
        //get photos from query "landscape" instead
        const newimgresp = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=landscape&image_type=photo&per_page=100`);
        if (!newimgresp.ok) {
            return(<main className={styles.error}><p>Error {newimgresp.status}: {newimgresp.statusText}</p><span>🤪</span></main>)    
        } 
        const newimgdata = await newimgresp.json();
        images = newimgdata.hits;

        num = images.length;
    }
    else {
        num = images.length;
    }

    //random image from array with index
    const imgIndex: number = Math.floor(Math.random() * num);

    const imgID: string = images[imgIndex].id.toString();

 
    //make object of this compination
    const thisPoster: Poster = {
        quoteID: id,
        quoteText: quotedata.quote,
        quoteAuthor: quotedata.author,
        imgID: imgID,
        imgURL: images[imgIndex].largeImageURL,
    }

     
    return (
        <main id="main">

            <section className={styles.poster}>
                <Image className={styles.photo}
                    src={images[imgIndex].largeImageURL}
                    alt={`Photo on the theme of ${query}`}
                    width={400}
                    height={300}
                />
                <article className={styles.quoteContainer}>
                    <p className={styles.quote}>{quotedata.quote}</p>
                    <p className={styles.author}>~{quotedata.author}</p>
                </article>
            </section>

            <section className={styles.alternatives}>
                <article className={styles.saving}>  
                    <Link href={`/${thisPoster.quoteID}?query=${query}`} className={styles.changeButton}>Get another photo</Link>            
                    <SaveFav thisPoster={thisPoster}/>
                </article>
            </section>
        </main>

    )
}