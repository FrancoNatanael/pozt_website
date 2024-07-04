import categories from '@/data/categories.json'
import { Accordion, AccordionTab } from 'primereact/accordion'

export default function Page(){
    return <div className="p-6 mt-6" style={{height: '80vh'}}>
        <h2 className='text-4xl text-center font-medium'>Explore Our Blog Categories</h2>
        <h3 className='text-lg text-center opacity-[0.8] mt-1'>Discover a wealth of content across a variety of topics.</h3>

        <Accordion multiple className='p-7'>
            {categories.map((category) => (
                <AccordionTab header={category.category} headerClassName='p-6 text-lg bg-[#eceef1] opacity-[0.9] rounded-lg mb-2'>
                    <p className="pb-5 px-6 rounded-lg">
                        {category.description}
                    </p>
                </AccordionTab>
            ))}
        </Accordion>
    </div>
}