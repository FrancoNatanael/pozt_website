import { Pozt } from '../../types/pozt.types';

export default function PoztCard({ pozt } : {pozt: Pozt}){
    return <div className='w-[75%] text-center'>
        <h2 className='text-4xl'>{pozt.title}</h2>
        <p className='my-5'>{pozt.short_description} / {'by _>' + pozt.author}</p>
        <p className='text-xl'>{pozt.text}</p>
   </div>
}