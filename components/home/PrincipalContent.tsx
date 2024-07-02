import Image from "next/image";
import img from "../../public/hero.png";
import { Button } from "primereact/button";
import Link from "next/link";

export default function PrincipalContent(){
    return <section className="flex justify-between p-5 mt-6" style={{height: '80vh'}}>
        <section className="w-[50%] px-2 py-16">
            <h1 className="text-4xl">Read interesting pozts <span>{'{ posts :> }'}</span></h1>
            <h3 className="mt-2 text-lg">create, share and translate all our ideas.</h3>
            <p className="text-sm italic">pozt.</p>

            <div className="mt-5 bg-[#FBB44A] rounded-lg w-fit">
                <Link href={'/create-post'}>
                    <Button label="I'm insipired" icon={() => <i className="pi pi-plus" style={{fontSize: '13px', marginRight: '8px'}}></i>} iconPos="left" className="text-lg p-3"/>
                </Link>
            </div>
        </section>

        <section className="">
            <Image src={img} alt={"Hero image"} fill={false}/>
        </section>
    </section>
}