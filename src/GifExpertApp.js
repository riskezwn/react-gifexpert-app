import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

   
    const [categories, setCategories] = useState(['Rick And Morty']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    ))
                }
            </ol>
        </>
    )
};

export default GifExpertApp;