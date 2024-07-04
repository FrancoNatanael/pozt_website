'use client'
import { useEffect, useState } from "react";
import FormCreatePozt from "./components/FormCreatePozt";
import PanelSettingsAudio from "./components/PanelSettingsAudio";
import { Button } from "primereact/button";
import { Pozt } from "@/types/pozt.types";
import useCreatePozt from "@/hooks/UseCreatePozt";

export default function Page(){
    const [letRead, setLetRead] = useState(false)
    const [letTranslate, setLetTranslate] = useState(false)
    const [newPozt, setNewPozt] = useState(null)
    const [create, setCreate] = useState(0)
    const poztCreated = useCreatePozt({...newPozt as any, letRead, letTranslate}, create)

    const handleConfirm = () => {
        setCreate(create + 1)
    }

    useEffect(() => {
        console.log(poztCreated)
    },[poztCreated])

    return <div className="p-5 mt-6" style={{height: '80vh'}}>
        <p className='text-base mb-4'>{`{ Time to inspire }`}</p>
        
        <div className='flex justify-around flex-wrap'>
            <FormCreatePozt setPozt={setNewPozt} created={create}/>
            <PanelSettingsAudio letRead={letRead} letTranslate={letTranslate} setLetRead={() => setLetRead(!letRead)} setLetTranslate={() => setLetTranslate(!letTranslate)}/>
        </div>

            <div className="w-[72%] lg:ml-2 :md:m-auto">
                <Button 
                className='p-2 rounded-lg bg-black text-white font-light mt-1 w-[20%]' 
                label='Create pozt!'
                onClick={handleConfirm}/>
            </div>
</div>
}