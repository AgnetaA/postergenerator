export interface Quotes {
    id: number,
    quote: string,
    author: string,
}

export interface Photo {
    id: number,
    url: string,
}

export interface Poster {
    quoteID: string,
    quoteText: string,
    quoteAuthor: string,
    imgID: string,
    imgURL: string,
}

