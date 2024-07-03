'use client'
import PoztCard from '@/components/pozt/Pozt'
import jsonData from '@/data/posts.json'
import categories from "@/data/categories.json";
import AudioPanel from './components/AudioPanel'

export default function Page({ params } : {params: {id: number}}){
    const pozt = jsonData.find(x => x.id == params.id)!
    const category = categories.find(x => x.id == pozt.id)!.category

    return <div className="p-5 mt-6" style={{height: '80vh'}}>
        <p className='text-base mb-4'>{`{ ${category} }`}</p>
        
        <div className='flex justify-around flex-wrap'>
            <PoztCard pozt={pozt} key={pozt.id}/>
            <AudioPanel pozt={pozt}/>
        </div>
    </div>
}