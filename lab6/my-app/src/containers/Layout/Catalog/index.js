import React from "react";
import FilterSection from "./FilterSection/filterSection";
import ItemsList from "./ItemsList/item_list";

const Catalog = () => {
    return (
        <div>
            <FilterSection />
            <ItemsList />
        </div>
    );
};

export default Catalog;