import Link from "next/link";

export default function Nav(){
    return <div className="flex justify-between p-5 text-lg">
        <Link href={"/"}>
            <h2>{'{ Pozt }'}</h2>
        </Link>

    <div className="flex justify-between xl:w-[40%] lg:w-[51%] md:w-[61%]">
        <nav>
            <ul>
                <Link href={'/post/all'} className="mr-7">read pozts</Link>
                {/* <Link href={'/'} className="mr-7">pozters</Link> */}
                <Link href={'/'} className="mr-7">categories</Link>
                <Link href={'/create-post'} className="mr-7 py-1 px-3 rounded-lg w-fit border-2 border-[#FBB44A]">+ create</Link>
            </ul>
        </nav>

        <div className="w-1/6">
            <i className="pi pi-user" style={{ fontSize: '1.125rem', marginTop: '6px' }}></i>
        </div>
    </div>
    </div>
}