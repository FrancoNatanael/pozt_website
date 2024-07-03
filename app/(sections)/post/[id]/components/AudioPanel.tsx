'use client'
import useApi from "@/hooks/UseApi";
import useFetchAudio from "@/hooks/UseFetchAudio";
import { Pozt } from "@/types/pozt.types";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useRef, useState } from "react";

export default function AudioPanel({pozt} : { pozt: Pozt}){
    const [text, setText] = useState("")
    const {data, error, loading} = useApi("https://api.elevenlabs.io/v1/voices", false)
    const audioUrl = useFetchAudio(text)
    const audioRef = useRef<HTMLAudioElement>(null);
    const [selectedSpeaker, setSelectedSpeaker] = useState(null)
    const [speakers, setSpeakers] = useState([])

    const setAudioRef = () => {
        audioRef.current!.src = audioUrl
    }

    const mapSpeakers = () => {
        const arrayMapped = (data as any).voices.map((speaker: any) => ({
            name: speaker.name,
            code: speaker.voice_id
        }))

        setSpeakers(arrayMapped as any)
    }

    useEffect(() => {
        setAudioRef()
    }, [audioUrl])

    useEffect(() => {
        if(data != undefined && (data as any).voices != undefined) mapSpeakers()
    }, [data])
    
    return <>
        <div className='w-[25%] mr-5 rounded-lg bg-[#c2c2c2e1] p-3'>
            <h2 className="text-lg mb-3">Generate audio with AI!</h2>

            <div>
                <label className="text-sm">Select speaker</label>
            <Dropdown value={selectedSpeaker} onChange={(e) => setSelectedSpeaker(e.value)} options={speakers} optionLabel="name" 
    placeholder="Select speaker" className="w-full md:w-14rem p-2 border-2 rounded-lg" />
            </div>

            <Button className='p-3 rounded-lg bg-[#fbb44a] text-white font-light mt-3' label='Generate audio ' onClick={() => setText(pozt.text)}/>
            
            <div className="mt-5">
                <label className="text-sm">Generated audio 
                    {audioRef.current != null && audioRef.current!.src != "" ? <i className="pi 
pi-play-circle text-[16px] align-middle ml-1 mb-0.5"/> : <></>}</label>
                <audio ref={audioRef} controls className="w-full mt-1"/>
            </div>
        </div>
    </>
}