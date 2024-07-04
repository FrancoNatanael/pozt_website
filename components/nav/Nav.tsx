'use client'
import { useLogin } from "@/context/loginContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Nav(){
    const router = useRouter()
    const [login, setLogin] = useLogin() as any

    const handleLogOut = () => {
        if(login.user != null){
            setLogin({user: null})

            router.push("/")
        }
    }

    return <div className="flex justify-between p-5 text-lg">
        <Link href={"/"}>
            <h2>{'{ Pozt }'}</h2>
        </Link>

    <div className="flex justify-between w-fit">
        <nav>
            <ul>
                <Link href={'/post/all'} className="mr-7 transition-all duration-200 hover:tracking-[0.13em]">read pozts</Link>
                <Link href={'/categories/all'} className="mr-7 transition-all duration-200 hover:tracking-[0.13em]">categories</Link>
                {login.user != null && <Link href={'/create-post'} 
                className="mr-7 py-1 px-3 rounded-lg w-fit border-2 border-[#FBB44A] tracking-wider transition-all duration-200  hover:tracking-[0.13em]">+ create</Link>}
            </ul>
        </nav>

        <div className="w-fit">
            {login.user != null ?
                <div className="flex justify-between flex-wrap">
                    <p className="opacity-[0.9]">{`{ Welcome ${login.user.name} }`}</p> 
                    <i onClick={handleLogOut} className="pi pi-sign-out cursor-pointer hover:opacity-[0.8]" style={{ fontSize: '1.125rem', marginTop: '6px', marginLeft: '4px' }}></i>
                </div> 
                :
                <Link href={"/login"}>
                    <i className="pi pi-user cursor-pointer hover:opacity-[0.8]" style={{ fontSize: '1.125rem', marginTop: '6px' }}></i>
                </Link>
            }
        </div>
    </div>
    </div>
}