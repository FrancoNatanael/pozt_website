'use client'
import Image from "next/image";
import img from "../../public/hero.png";
import { Button } from "primereact/button";
import Link from "next/link";
import { useLogin } from "@/context/loginContext";

export default function PrincipalContent(){
    const [login, setLogin] = useLogin() as any

    return <section className="flex justify-between p-5 mt-6" style={{height: '80vh'}}>
        <section className="w-[50%] px-2 py-16">
            <h1 className="text-4xl font-medium">Read interesting pozts <span>{'{ posts :> }'}</span></h1>
            <h3 className="mt-2 text-xl">create, share and convert to audio our pozts.</h3>
            <p className="text-sm italic">pozt.</p>

            <div className="flex justify-between w-fit min-w-[367px] gap-3">
                <div className="mt-5 bg-black text-[#FBB44A] rounded-lg w-fit tracking-wider transition-all duration-200 shadow-md hover:scale-105 hover:shadow-lg">
                    <Link href={login.user == null ? '/' : '/create-post'}>
                        <Button 
                        label="I'm insipired" 
                        icon={() => <i className="pi pi-plus" 
                        style={{fontSize: '13px', marginRight: '8px'}}></i>} 
                        iconPos="left" 
                        className="text-lg font-medium p-3"
                        disabled={login.user == null}/>
                    </Link>
                </div>

                {login.user == null && <div className="mt-5 border-2 border-[#e75023] rounded-lg w-fit tracking-wider shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg">
                    <Link href={'/login'}>
                        <Button 
                        label="Sign in to create!" 
                        icon={() => <i className="pi pi-verified" 
                        style={{fontSize: '13px', marginRight: '8px'}}></i>} 
                        iconPos="left" 
                        className="text-lg p-3 font-medium"/>
                    </Link>
                </div>}
            </div>
        </section>

        <section className="">
            <Image src={img} alt={"Hero image"} fill={false} className="min-w-[635px]"/>
        </section>
    </section>
}