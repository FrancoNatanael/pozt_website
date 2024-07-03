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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
            ))}
        </Accordion>
    </div>
}