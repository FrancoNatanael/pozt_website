import { Accordion, AccordionTab } from "primereact/accordion";
import { Checkbox } from "primereact/checkbox";

export default function PanelSettingsAudio({ letRead, letTranslate,setLetRead, setLetTranslate } : {letRead: boolean, letTranslate: boolean,setLetRead: any, setLetTranslate: any}){
    return <div className='h-fit lg:w-[25%] md:w-[72%]  mr-5 rounded-lg p-3 bg-background border border-[#c2c2c2]'>
        <h2 className="text-xl mb-1 font-medium">Enable generate audio with AI {'_>'}</h2>

        <div id="content-audio">
            <Accordion multiple className='p-7'>
                <AccordionTab header={'Enable AI audio options'} headerClassName='p-4 bg-[#eceef1] opacity-[0.9] rounded-lg'>
                    <div className="pb-5 px-6 rounded-lg">
                        <div className="flex align-items-center my-5">
                            <Checkbox inputId="let_read" name="ai_options" value="let_read" onChange={setLetRead} checked={letRead} />
                        <label htmlFor="let_read" className="ml-2">Let read</label>
                        </div>
                        
                        <div className="flex align-items-center my-5">
                            <Checkbox inputId="let_translate" name="ai_options" value="let_translate" onChange={setLetTranslate} checked={letTranslate} />
                            <label htmlFor="let_translate" className="ml-2">Let translate</label>
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>

    </div>
}