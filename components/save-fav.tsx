
import { Poster } from "@/interfaces";

type propsType = {
    thisPoster: Poster;
}

export default function SaveFav({thisPoster}:propsType) {
    console.log("i saveFav", thisPoster);

    return(
        <div>
            <button>Save</button>
        </div>
    )
}