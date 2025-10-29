import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
    FilterSectionWrapper, 
    FilterButton,
    FilterLabel,
    FilterSelect,
    FilterLabelWrapper
} from "./filterSection.styled";

const FilterSection = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    // Локальний стан для фільтрів
    const [localFilters, setLocalFilters] = useState({
        filter1: "",
        filter2: "",
        filter3: ""
    });
    
    // Ініціалізувати локальні фільтри з URL при завантаженні
    useEffect(() => {
        setLocalFilters({
            filter1: searchParams.get("filter1") || "",
            filter2: searchParams.get("filter2") || "",
            filter3: searchParams.get("filter3") || ""
        });
    }, [searchParams]);
    
    const handleFilterChange = (filterId, value) => {
        setLocalFilters(prev => ({
            ...prev,
            [filterId]: value
        }));
    };
    
    const applyAllFilters = () => {
        const newParams = new URLSearchParams(searchParams);
        
        // Застосувати всі фільтри
        Object.entries(localFilters).forEach(([key, value]) => {
            if (value) {
                newParams.set(key, value);
            } else {
                newParams.delete(key);
            }
        });
        
        setSearchParams(newParams);
    };
    
    
    return (
        <FilterSectionWrapper>
            <FilterLabelWrapper>
                <FilterLabel htmlFor="filter1"></FilterLabel>
                <FilterSelect 
                    id="filter1" 
                    value={localFilters.filter1}
                    onChange={(e) => handleFilterChange("filter1", e.target.value)}
                >
                    <option value="">All Colors</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                </FilterSelect>
                <FilterLabel htmlFor="filter2"></FilterLabel>
                <FilterSelect 
                    id="filter2" 
                    value={localFilters.filter2}
                    onChange={(e) => handleFilterChange("filter2", e.target.value)}
                >
                    <option value="">All Prices</option>
                    <option value="Less">Less than 100$</option>
                    <option value="About">About 100$</option>
                </FilterSelect>
                <FilterLabel htmlFor="filter3"></FilterLabel>
                <FilterSelect 
                    id="filter3" 
                    value={localFilters.filter3}
                    onChange={(e) => handleFilterChange("filter3", e.target.value)}
                >
                    <option value="">All Types</option>
                    <option value="Solo_car">Solo Car</option>
                    <option value="Set">Set</option>
                </FilterSelect>
            </FilterLabelWrapper>
            <FilterButton onClick={applyAllFilters}>Apply</FilterButton>
        </FilterSectionWrapper>
    );
};

export default FilterSection;