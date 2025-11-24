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
    const filter1 = searchParams.get("filter1") || "";
    const filter2 = searchParams.get("filter2") || "";
    const filter3 = searchParams.get("filter3") || "";

    useEffect(() => {
        const fetchCarsData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(API_URL);
                console.log("Fetched cars data:", response.data);
                setCarsData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCarsData();
    }, []);

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
            
        if (filter1) {
            result = result.filter(item => item.color === filter1);
        }

        if (filter2) {
            if (filter2 === "About") {
                result = result.filter(item => item.price > 100 && item.price <= 1000);
            } else if (filter2 === "Less") {
                result = result.filter(item => item.price <= 100);
            }
        }

        if (filter3) {
            result = result.filter(item => item.category === filter3);
        }
 
        return result;
    }, [carsData, q, filter1, filter2, filter3]);

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