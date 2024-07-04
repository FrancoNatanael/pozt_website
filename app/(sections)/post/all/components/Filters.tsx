import { Dropdown } from "primereact/dropdown";
import categories from "@/data/categories.json";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function Filters(){
    return <div className="w-fit flex justify-between gap-3 flex-wrap">
            <div className="border-2 rounded-lg w-[60px] text-center tracking-wider transition-all duration-200 hover:border-[#FBB44A]">
                <Button 
                label="All"
                className="p-2"/>
            </div>
            <div>
                <Dropdown 
                // value={selectedCategory}
                // onChange={(e) => setSelectedSpeaker(e.value)}
                options={categories}
                optionLabel="category" 
                placeholder="Category" 
                className="w-full p-2 rounded-lg border-2 opacity-[0.9] transition-all duration-200 hover:border-[#FBB44A]"/>
            </div>

            <div>
                <InputText 
                name="search"
                placeholder="...find by title" 
                // value={formData.title} 
                // onChange={handleChangeEvent} 
                className="sm:w-[150px] md:w-[200px] lg:w-[400px] p-2 rounded-lg border-2 border-[#eceef1]"/>
            </div>

            <div className="absolute right-6 bg-black text-[#FBB44A] rounded-lg w-[80px] text-center tracking-wider transition-all duration-200 hover:shadow-md hover:scale-105">
                <Button 
                label="Saved"
                icon={() => <i className="pi pi-bookmark-fill" /*si estan seleccionados unicamente los guardados que la class sea -fill sino sin fill*/ 
                    style={{fontSize: '13px', marginRight: '8px'}}></i>}
                iconPos="right"     
                className="p-2 pt-2.5"/>
            </div>
    </div>
}