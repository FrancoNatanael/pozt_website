'use client'
import { Dropdown } from "primereact/dropdown";
import categories from "@/data/categories.json";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { FilterOptions } from "@/types/pozt.types";
import { useLogin } from "@/context/loginContext";

export default function Filters({setFilters} : {setFilters: any}){
    const [login, setLogin] = useLogin() as any
    const [filterOptions, setFilterOptions] = useState({
        all: true,
        selectedCategory: null,
        textToFilter: "",
        saved: false
    } as FilterOptions)

    const setFilterOptionsDefault = () => {
        setFilterOptions({
            all: true,
            selectedCategory: null,
            textToFilter: "",
            saved: false
        } as FilterOptions)
    }

    const getBoolFiltersApplied = () => {
        return filterOptions.selectedCategory != null || filterOptions.textToFilter != ""
    }

    const handleChangeFilteDropdown = (value: any) => {
        setFilterOptions({...filterOptions, selectedCategory: {...value}, all: false})
    }

    const handleChangeFilterInputText = ({target} : {target: any}) => {
        setFilterOptions({...filterOptions, textToFilter: target.value, all: filterOptions.saved || filterOptions.selectedCategory != null || target.value.length > 0 ? false : !filterOptions.all})
    }

    const handleChangeFilterSaved = () => {
        setFilterOptions({...filterOptions, saved: !filterOptions.saved, all: getBoolFiltersApplied() ? false : !filterOptions.all})
    }

    const handleChangeFilterAll = () => {
        setFilterOptions({all: true, selectedCategory: null, textToFilter: "", saved: false})
    }

    useEffect(() => {
        setFilters({...filterOptions})
    },[filterOptions])

    return <div className="w-fit flex justify-between gap-3 flex-wrap">
            <div className={
                `${filterOptions.all ? 'border-[#FBB44A]' : 'border'} 
                ${filterOptions.selectedCategory == null && filterOptions.textToFilter == "" && !filterOptions.saved ? 'pointer-events-none' : 'pointer-events-auto'}
                border-2 rounded-lg w-[43px] text-center tracking-wider transition-all duration-200 hover:border-[#FBB44A]`}>
                <Button 
                label="All"
                className="p-2"
                onClick={handleChangeFilterAll}/>
            </div>
            <div className="w-[120px]">
                <Dropdown 
                value={filterOptions.selectedCategory}
                onChange={(e) => handleChangeFilteDropdown(e.value)}
                options={categories}
                optionLabel="category" 
                placeholder="Category" 
                className="w-full p-2 rounded-lg border-2 opacity-[0.9] transition-all duration-200 hover:border-[#FBB44A]"/>
            </div>

            <div>
                <InputText 
                name="search"
                placeholder="...find by title" 
                value={filterOptions.textToFilter} 
                onChange={handleChangeFilterInputText}
                className="sm:w-[150px] md:w-[200px] lg:w-[400px] p-2 rounded-lg border-2 border-[#eceef1]"/>
            </div>

            {login.user != null && <div className="absolute right-6 bg-black text-[#FBB44A] rounded-lg w-[80px] text-center tracking-wider transition-all duration-200 hover:shadow-md hover:scale-105">
                <Button 
                label="Saved"
                icon={() => <i className={!filterOptions.saved ? "pi pi-bookmark" : "pi pi-bookmark-fill"} /*si estan seleccionados unicamente los guardados que la class sea -fill sino sin fill*/ 
                    style={{fontSize: '13px', marginRight: '8px'}}></i>}
                iconPos="right"     
                className="p-2 pt-2.5"
                onClick={handleChangeFilterSaved}/>
            </div>}
    </div>
}