'use client'
import useApi from "@/hooks/UseApi";
import useFetchAudio from "@/hooks/UseFetchAudio";
import { Pozt } from "@/types/pozt.types";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useRef, useState } from "react";

export default function AudioPanel({pozt} : { pozt: Pozt}){
    const [text, setText] = useState("")
    const {data, error} = useApi("https://api.elevenlabs.io/v1/voices", false)
    const audioRef = useRef<HTMLAudioElement>(null);
    const [selectedSpeaker, setSelectedSpeaker] = useState({name: "", code: ""})
    const [loadAudio, setLoadAudio] = useState(0)
    const [speakers, setSpeakers] = useState([])
    const {audioUrl, loading} = useFetchAudio(text, selectedSpeaker!.name, loadAudio)
    const [selectedTextOption, setSelectedTextOption] = useState("title")

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

    const setTextByOption = (option: string) => {
        setSelectedTextOption(option)

        switch (option) {
            case 'title':
                setText(pozt.title)
                break;
            case 'short_description':
                setText(pozt.short_description)
                break;
            case 'text':
                setText(pozt.text)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        setAudioRef()
    }, [audioUrl])

    useEffect(() => {
        if(data != undefined && (data as any).voices != undefined) mapSpeakers()
    }, [data])
    
    return <>
        <div className='h-fit lg:w-[25%] md:w-[72%] md:mt-4 mr-5 rounded-lg p-3 bg-background border border-[#c2c2c2]'>
            <h2 className="text-xl mb-1 font-medium">Generate audio with AI {'_>'}</h2>

            <div id="content-audio" className="p-5">
                <div className="audio-options">
                    <div>
                        <label className="text-sm">Select speaker</label>
                        <Dropdown 
                        value={selectedSpeaker}
                        onChange={(e) => setSelectedSpeaker(e.value)}
                        options={speakers}
                        optionLabel="name" 
                        placeholder="Select speaker" 
                        className="w-full p-2 rounded-lg border-2 border-[#eceef1] opacity-[0.9]"/>
                    </div>

                    <div className="mt-4">
                        <label className="text-sm">Select text to translate</label>
                        <div className="flex justify-between flex-wrap gap-3 p-2">
                            <div className="flex justify-around">
                                <RadioButton 
                                inputId="title" 
                                name="text_option" 
                                value="title" 
                                onChange={(e) => setTextByOption(e.value)} 
                                checked={selectedTextOption === 'title'} />
                                <label htmlFor="title" className="text-normal ml-1.5">Title</label>
                            </div>

                            <div className="flex justify-around">
                                <RadioButton 
                                inputId="short_description" 
                                name="text_option" 
                                value="short_description" 
                                onChange={(e) => setTextByOption(e.value)} 
                                checked={selectedTextOption === 'short_description'} />
                                <label htmlFor="short_description" className="text-normal ml-1.5">Description</label>
                            </div>

                            <div className="flex justify-around">
                                <RadioButton 
                                inputId="text" 
                                name="text_option" 
                                value="text" 
                                onChange={(e) => setTextByOption(e.value)} 
                                checked={selectedTextOption === 'text'}/>
                                <label htmlFor="text" className="text-normal ml-1.5">Text</label>
                            </div>
                        </div>
                    </div>

                </div>

                <Button 
                className='p-2 rounded-lg bg-black text-white font-light mt-5 w-full relative' 
                label='Generate audio '
                iconPos="left"  
                onClick={() => setLoadAudio(loadAudio + 1)}/>
                
                <div className="mt-10">
                    <label className="text-lg">Generated audio</label>
                    
                    {loading ? <div className="text-center mt-4"><i className="pi pi-spin pi-spinner text-[22px] mt-1"/></div> : <audio ref={audioRef} controls className="w-full mt-2"/>}
                </div>
            </div>

        </div>
    </>
}