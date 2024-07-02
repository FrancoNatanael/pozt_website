import { createAudioStreamFromText } from "@/api/evenlabs/text_to_speech_stream";
import { use, useEffect, useState } from "react";

function useFetchAudio(text: string){
    const [audioUrl, setAudioUrl] = useState("")

    const fetchAudio = async () => {
        const response = await createAudioStreamFromText(text)
        const audioBlob = new Blob([response])
        setAudioUrl(URL.createObjectURL(audioBlob));
    };

    useEffect(() => {
        if(text != "") fetchAudio();
    }, [text]);

    return audioUrl
}

export default useFetchAudio