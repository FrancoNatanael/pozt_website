'use client'
import data from '@/data/posts.json';
import { Pozt } from '@/types/pozt.types';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { useState } from 'react';

export default function Page() {
    const [poztSaved, setPoztSaved] = useState(false)

    return <section className="flex flex-wrap justify-between p-6 mt-6" style={{height: '80vh'}}>
        {(data as unknown as Array<Pozt>).map((pozt: Pozt) => (
            <article className='w-[20%] min-w-64 h-[300px] p-3 border rounded-lg border-[#c2c2c2] shadow-sm m-5 transition-all duration-300 hover:scale-110 flex flex-col'>
                <h3 className='text-2xl'>{pozt.title}</h3>
                <p className='tex-sm mt-auto'>{pozt.short_description}</p>
                <p className='text-base mt-auto'>by {`_> ${pozt.author}`}</p>
                
                <div className='flex justify-around mt-auto'>
                    <Link href={`/post/${pozt.id}`}>
                        <i className='pi pi-eye transition-all duration-200 hover:text-[#fbb44a]'></i>
                    </Link>
                    
                    <Button onClick={() => setPoztSaved(!poztSaved)}>
                        <i className={`${poztSaved ? 'pi pi-bookmark' : 'pi pi-bookmark-fill'} transition-all duration-200`}></i>       
                    </Button>
                </div>
            </article>
        ))}
    </section>
}