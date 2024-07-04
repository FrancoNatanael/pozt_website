'use client'
import { useLogin } from "@/context/loginContext";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";

export default function Page(){
    const router = useRouter()
    const [login, setLogin] = useLogin() as any
    const [created, setCreated] = useState(0)
    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        password: ""
    })

    const handleChangeEvent = (e: any) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const clearForm = () => {
        setFormData({
            name: "",
            mail: "",
            password: ""
        })
    }

    useEffect(() => {
        if(created > 0) clearForm()
    }, [created])

    const handleConfirm = () => {
        if(login.user == null){
            setLogin({user: {
                name: formData.name,
                mail: formData.mail
            }})

            router.push("/post/all")
        }
    }

    return <div className="p-5 mt-6" style={{height: '80vh'}}>
        <div className="p-5 m-auto grid gap-4 grid-cols-1 lg:w-[50%] md:w-[70%] sm:w-[85%]">
            <h2 className="text-4xl text-left font-medium">{'{ Welcome back }'}</h2>
            <h3 className='text-left opacity-[0.8] mt-1 mb-3'>Unlock the power of your account by entering your login credentials.</h3>

            <div>
                <label>Name</label>
                <InputText
                name="name"
                required
                value={formData.name} 
                onChange={handleChangeEvent} 
                className="w-full p-1 text-lg rounded-lg border-2 border-[#eceef1]"/>
            </div>

            <div>
                <label>Mail</label>
                <InputText
                name="mail"
                type="email"
                required
                value={formData.mail} 
                onChange={handleChangeEvent} 
                className="w-full p-1 text-lg rounded-lg border-2 border-[#eceef1]"/>
            </div>

            <div>
                <label>Password</label>
                <InputText
                required
                type="password"
                name="password"
                value={formData.password} 
                onChange={handleChangeEvent} 
                className="w-full p-1 text-lg rounded-lg border-2 border-[#eceef1]"/>
            </div>

            <Button 
            className='p-2 rounded-lg bg-black text-white font-light mt-1 w-full' 
            label='Sign in'
            onClick={handleConfirm}
            />            
        </div>
    </div>
}