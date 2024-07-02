'use client'
import useApi from "@/hooks/UseApi";
import useFetchAudio from "@/hooks/UseFetchAudio";
import { Pozt } from "@/types/pozt.types";
import { Button } from "primereact/button";
import { useEffect, useRef, useState } from "react";

export default function AudioPanel({pozt} : { pozt: Pozt}){
    const [text, setText] = useState("")
    // const {data, error, loading} = useApi("https://api.elevenlabs.io/v1/voices", false)
    const audioUrl = useFetchAudio(text)
    const audioRef = useRef<HTMLAudioElement>(null);

    const setAudioRef = () => {
        audioRef.current!.src = audioUrl
    }

    useEffect(() => {
        setAudioRef()
    }, [audioUrl])
    
    return <>
        <div className='w-1/3 mr-5 rounded-lg border border-black'>
            <Button className='p-3' label='Generate audio' onClick={() => setText(pozt.text)}/>
            <audio ref={audioRef} controls className="w-full"/>
        </div>
    </>
}