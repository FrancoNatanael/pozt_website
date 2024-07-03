'use client'
import { useState } from "react";
import FormCreatePozt from "./components/FormCreatePozt";
import PanelSettingsAudio from "./components/PanelSettingsAudio";
import { Button } from "primereact/button";

export default function Page(){
    const [letRead, setLetRead] = useState(false)
    const [letTranslate, setLetTranslate] = useState(false)
    // const [newPozt, setNewPozt] = useState(
    //     {

    //     } as Pozt
    // )
    // const {reult} = useCreatePozt(title, shortDescription, pozter, text, letRead, letTranslate) // manejar un objeto con tipado que contenga todas la props como en pf

    return <div className="p-5 mt-6" style={{height: '80vh'}}>
    <p className='text-base mb-4'>{`{ Time to inspire }`}</p>
    
    <div className='flex justify-around flex-wrap'>
        <FormCreatePozt/>
        <PanelSettingsAudio letRead={letRead} letTranslate={letTranslate} setLetRead={() => setLetRead(!letRead)} setLetTranslate={() => setLetTranslate(!letTranslate)}/>
    </div>

        <div className="w-[72%] lg:ml-2 :md:m-auto">
            <Button 
            className='p-2 rounded-lg bg-black text-white font-light mt-1 w-[20%]' 
            label='Create pozt!'
            onClick={() => console.log("s")}/>
        </div>
</div>
}