import { useState } from "react";
import data from "@/data/posts.json";

function useCreatePozt(title: string, shortDescription: string, pozter: string, text: string, letRead: boolean, letTranslate: boolean){
    const [created, setCreated] = useState(false)

    const fs = require('fs')
    fs.writeFileSync('file.json', JSON.stringify(
        {
            id: data.length + 1,
            title: title,
            author: pozter,
            short_description: shortDescription,
            category_id: 1, // set category id chosen in form
            text: text,
            let_translate: letTranslate,
            let_read: letRead
        }
    ));

    setCreated(true)

    return created
}

export default useCreatePozt