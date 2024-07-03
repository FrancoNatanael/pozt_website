import { Pozt } from '../../types/pozt.types';

export default function PoztCard({ pozt } : {pozt: Pozt}){
    return <div className='w-[70%] text-left mr-3'>
        <h2 className='text-4xl font-medium'>{pozt.title}</h2>
        <p className='my-5'>{pozt.short_description} / {'by _>' + pozt.author}</p>
        <p className='text-xl'>{pozt.text}</p>
   </div>
}