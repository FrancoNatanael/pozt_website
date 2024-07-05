'use client'
import { useLogin } from '@/context/loginContext';
import pozts from '@/data/posts.json';
import categories from '@/data/categories.json';
import { FilterOptions, Pozt } from '@/types/pozt.types';
import Link from 'next/link';
import { Button } from 'primereact/button';
import Filters from './components/Filters';
import { useState } from 'react';

export default function Page() {
    const [login, setLogin] = useLogin() as any
    const [filteredPozts, setFilteredPozts] = useState(pozts as Array<Pozt>)
    const [filters, setFilters] = useState({
        all: true,
        selectedCategory: null,
        textToFilter: "",
        saved: false
    } as FilterOptions)

    const handleClickSave = (id: number) => {
       if(login.user != null){
        if(login.saved != null){
            if(!(login.saved as Array<number>).includes(id))
                setLogin({...login, saved: login.saved.concat(id)})
            else
                setLogin({...login, saved: login.saved.filter((x:number) => x != id)})
        }else{
            setLogin({...login, saved: [id]})
        }
       } 
    }

    const getIsPoztSavedByUser = (id: number) => {
        return login.user != null && login.saved != null && login.saved.length > 0 && login.saved.find((x: number) => x == id)
    }

    const filterPozts = (value: FilterOptions) => {
        const filteredArray = value.all ? pozts : 
        pozts.filter((pozt) => value.saved ? getIsPoztSavedByUser(pozt.id) : true)
        .filter((pozt) => value.selectedCategory != null ? pozt.category_id == value.selectedCategory.id : true)
        .filter((pozt) => value.textToFilter != "" ? pozt.title.includes(value.textToFilter) : true)

        setFilteredPozts(filteredArray)
    }

    return <section className="p-6 mt-6" style={{height: '80vh'}}>
         <h2 className='text-4xl text-center font-medium'>Exploring Tomorrow's Innovations Today</h2>
         <h3 className='text-lg text-center opacity-[0.8] mt-1'>Embark on a journey through the dynamic world of technology with our curated collection of articles.</h3>

        <div className='p-6 relative'>
            <Filters setFilters={filterPozts}/>
        </div>

        <div className='w-full flex flex-wrap justify-between mt-4'>
            {(filteredPozts as unknown as Array<Pozt>).map((pozt: Pozt) => (
                <article key={pozt.id} className='w-[20%] min-w-64 h-[300px] p-3 border rounded-lg border-[#c2c2c2] shadow-sm m-5 transition-all duration-300 hover:scale-110 flex flex-col'>
                    <h3 className='text-2xl'>{pozt.title}</h3>
                    <p className='tex-sm mt-auto'>{pozt.short_description}</p>
                    <p className='text-base mt-auto'>by {`_> ${pozt.author}`}</p>
                    
                    <div className='flex justify-around mt-auto'>
                        <Link href={`/post/${pozt.id}`}>
                            <i className='pi pi-eye transition-all duration-200 hover:text-[#fbb44a]'></i>
                        </Link>
                        
                        {
                            login.user != null && 
                            <Button onClick={() => handleClickSave(pozt.id)}>
                                <i className={`${!getIsPoztSavedByUser(pozt.id) ? 'pi pi-bookmark' : 'pi pi-bookmark-fill'} transition-all duration-200`}></i>       
                            </Button>
                        }
                    </div>
                </article>
            ))}
        </div>
    </section>
}