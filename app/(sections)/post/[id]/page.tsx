'use client'
import PoztCard from '@/components/pozt/Pozt'
import jsonData from '@/data/posts.json'
import AudioPanel from './components/AudioPanel'

export default function Page({ params } : {params: {id: number}}){
    const pozt = jsonData.find(x => x.id == params.id)!

    return <div className="p-5 mt-6 flex justify-around flex-wrap" style={{height: '80vh'}}>
        <PoztCard pozt={pozt} key={pozt.id}/>
        <AudioPanel pozt={pozt}/>
    </div>
}