import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";

export default function FormCreatePozt(){
    const [title, setTitle] = useState("")
    const [shortDescription, setShortDescription] = useState("")
    const [pozter, setPozter] = useState("")
    const [text, setText] = useState("")

    return <div className='w-[70%] text-left mr-3'>
            <InputText 
            placeholder="...Pozt title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 text-4xl rounded-lg border-2 border-[#eceef1] mb-4"/>

            <InputText 
            placeholder="...Short description" 
            value={shortDescription} 
            onChange={(e) => setShortDescription(e.target.value)}
            className="w-full p-2 rounded-lg border-2 border-[#eceef1] mb-4"/>

            <InputText 
            placeholder="...Pozter" 
            value={pozter} 
            onChange={(e) => setPozter(e.target.value)}
            className="w-full text-sm p-2 rounded-lg border-2 border-[#eceef1] mb-4"/>

            <InputTextarea 
            value={text} 
            placeholder="...Pozt content, ideas and more" 
            onChange={(e) => setText(e.target.value)} 
            rows={10} 
            cols={30} 
            className="w-full text-xl border-2 p-2 border-[#eceef1] mb-4 rounded-lg"/>
    </div>
}