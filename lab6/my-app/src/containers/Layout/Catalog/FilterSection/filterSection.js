import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
    FilterSectionWrapper, 
    FilterButton,
    FilterLabel,
    FilterSelect,
    FilterLabelWrapper
} from "./filterSection.styled";

const FilterSection = ({ onFiltersChange }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [localFilters, setLocalFilters] = useState({
        color: "",
        priceRange: "",
        category: ""
    });

    useEffect(() => {
        setLocalFilters({
            color: searchParams.get("color") || "",
            priceRange: searchParams.get("priceRange") || "",
            category: searchParams.get("category") || ""
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
                <FilterLabel htmlFor="color"></FilterLabel>
                <FilterSelect 
                    id="color" 
                    value={localFilters.color}
                    onChange={(e) => handleFilterChange("color", e.target.value)}
                >
                    <option value="">All Colors</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="silver">Silver</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purple</option>
                    <option value="grey">Grey</option>
                </FilterSelect>
                <FilterLabel htmlFor="priceRange"></FilterLabel>
                <FilterSelect 
                    id="priceRange" 
                    value={localFilters.priceRange}
                    onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                >
                    <option value="">All Prices</option>
                    <option value="low">Under $100</option>
                    <option value="medium">$100 - $400</option>
                    <option value="high">Over $400</option>
                </FilterSelect>
                <FilterLabel htmlFor="category"></FilterLabel>
                <FilterSelect 
                    id="category" 
                    value={localFilters.category}
                    onChange={(e) => handleFilterChange("category", e.target.value)}
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