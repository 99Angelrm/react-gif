import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["huevos"]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory setCategories={setCategories} />
            <ol>
                {categories.map((item, id) => (
                    <GifGrid key={item+id} category={item}/>
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
