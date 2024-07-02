import data from '@/data/posts.json';
import { Pozt } from '@/types/pozt.types';
import Link from 'next/link';
import { Button } from 'primereact/button';

export default function Page() {
    return <section className="flex flex-wrap justify-between p-6 mt-6" style={{height: '80vh'}}>
        {(data as unknown as Array<Pozt>).map((pozt: Pozt) => (
            <article className='w-[20%] min-w-64 p-3 border-2 rounded-lg border-[#38538d] m-5'>
                <h3 className='text-xl'>{pozt.title}</h3>
                <p className='tex-sm mt-3'>{pozt.short_description}</p>
                <p className='text-base mt-2'>by {`_> ${pozt.author}`}</p>
                
                <div className='flex justify-around mt-6'>
                    <Link href={`/post/${pozt.id}`}>
                        <i className='pi pi-eye'></i>
                    </Link>
                    
                    <Button>
                        <i className='pi pi-bookmark'></i>                    
                    </Button>
                </div>
            </article>
        ))}
    </section>
}