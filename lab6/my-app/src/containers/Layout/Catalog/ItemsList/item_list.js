import {React, useMemo, useEffect, useState} from "react";
import axios from "axios";
import { API_URL } from "../../../../constants/constants.js";
import { ItemsListWrapper, ItemsGrid} from "./item_list.styled";
import CardItem from "../../../../components/CardItem/cardItem";
import { useSearchParams } from "react-router-dom";
import { getCarImage } from "../../../../utils/imageUtils.js";
import LoadingSpinner from "../../../../components/Loader/loadingSpinner.js";


const ItemsList = () => {
    const [carsData, setCarsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchParams] = useSearchParams();
    
    const q = (searchParams.get("q") || "").trim().toLowerCase();
    
    const color = searchParams.get("color") || "";
    const priceRange = searchParams.get("priceRange") || "";
    const category = searchParams.get("category") || "";
    
    const hasBackendFilters = color || priceRange || category;

    useEffect(() => {
        if (!hasBackendFilters) {
            const fetchCarsData = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get(API_URL);
                    console.log("Fetched all cars data:", response.data);
                    setCarsData(response.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchCarsData();
        } else {
            const fetchFilteredData = async () => {
                try {
                    setLoading(true);
                    const queryParams = new URLSearchParams();
                    
                    if (color) queryParams.append('color', color);
                    if (priceRange) queryParams.append('price_range', priceRange);
                    if (category) queryParams.append('category', category);
                    
                    const response = await axios.get(`${API_URL}?${queryParams.toString()}`);
                    console.log("Fetched filtered cars data:", response.data);
                    setCarsData(response.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchFilteredData();
        }
    }, [hasBackendFilters, color, priceRange, category]);

    const filtered = useMemo(() => {
        let result = carsData;
            
        if (q) {
            result = result.filter(item =>
                (item.title || "")
                    .toLowerCase()
                    .split(/\s+/)
                    .some(word => word.startsWith(q))
            );
        }
 
        return result;
    }, [carsData, q]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <ItemsListWrapper>
                <ItemsGrid>
                    <div>Error loading items: {error.message}</div>
                </ItemsGrid>
            </ItemsListWrapper>
        );
    }

    return (
        <ItemsListWrapper>
            <ItemsGrid>
                {filtered.map((item) => (
                        <CardItem
                            key={item.car_id}
                            id={item.car_id}
                            title={item.title}
                            description={item.description}
                            imageSrc={getCarImage(item.image_url)}
                            price={`${item.price}`}
                        />
                    ))}
                </ItemsGrid>
        </ItemsListWrapper>
    );
};

export default ItemsList;