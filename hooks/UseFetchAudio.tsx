import { createAudioStreamFromText } from "@/api/evenlabs/text_to_speech_stream";
import { use, useEffect, useState } from "react";

function useFetchAudio(text: string, speaker: string, loadAudio: number){
    const [audioUrl, setAudioUrl] = useState("")
    const [loading, setLoading] = useState(false)

    const fetchAudio = async () => {
        setLoading(true)

        const response = await createAudioStreamFromText(text, speaker)
        const audioBlob = new Blob([response])
        setAudioUrl(URL.createObjectURL(audioBlob));

        setLoading(false)
    };

    useEffect(() => {
        if(text != "" && speaker != "" && loadAudio > 0) fetchAudio();
    }, [loadAudio]);

    return {audioUrl, loading}
}

export default useFetchAudio