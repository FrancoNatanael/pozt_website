import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import {  useEffect, useState } from "react";

export default function FormCreatePozt({ setPozt, created } : { setPozt: any, created: number }){
    const [formData, setFormData] = useState({
        title: "",
        shortDescription: "",
        pozter: "",
        text: ""
    })

    const handleChangeEvent = (e: any) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
        setPozt(formData)
    }

    const clearForm = () => {
        setFormData({
            title: "",
            shortDescription: "",
            pozter: "",
            text: ""
        })
    }

    useEffect(() => {
        if(created > 0) clearForm()
    }, [created])

    return <div className='w-[70%] text-left mr-3'>
            <InputText 
            name="title"
            placeholder="...Pozt title" 
            value={formData.title} 
            onChange={handleChangeEvent} 
            className="w-full p-4 text-4xl rounded-lg border-2 border-[#eceef1] mb-4"/>

            <InputText 
            name="shortDescription"
            placeholder="...Short description" 
            value={formData.shortDescription} 
            onChange={handleChangeEvent} 
            className="w-full p-2 rounded-lg border-2 border-[#eceef1] mb-4"/>

            <InputText
            name="pozter" 
            placeholder="...Pozter" 
            value={formData.pozter} 
            onChange={handleChangeEvent} 
            className="w-full text-sm p-2 rounded-lg border-2 border-[#eceef1] mb-4"/>

            <InputTextarea
            name="text" 
            value={formData.text} 
            placeholder="...Pozt content, ideas and more" 
            onChange={handleChangeEvent} 
            rows={10} 
            cols={30} 
            className="w-full text-xl border-2 p-2 border-[#eceef1] mb-4 rounded-lg"/>
    </div>
}