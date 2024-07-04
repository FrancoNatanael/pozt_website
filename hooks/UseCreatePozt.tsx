import { useEffect, useState } from "react";
import pozts from "@/data/posts.json";

function useCreatePozt(newPozt: any, create: number){
    const [created, setCreated] = useState(false)

    const createPozt = () => {
        const obj = {
            id: pozts.length + 1,
            title: newPozt.title,
            author: newPozt.pozter,
            short_description: newPozt.shortDescription,
            category_id: 1,
            text: newPozt.text,
            let_translate: newPozt.letTranslate,
            let_read: newPozt.letRead
        }
        const objJson = JSON.stringify(obj)
        setCreated(true)
    }

    useEffect(() => {
        createPozt()
    }, [create])

    return created
}

export default useCreatePozt