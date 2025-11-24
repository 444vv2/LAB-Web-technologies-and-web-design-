import React, {useState, useEffect} from "react";
import axios from "axios";
import { API_URL } from "../../../../constants/constants.js";
import CardItem from "../../../../components/CardItem/cardItem.js"
import {TopCardContainer, TopCardTitle, TopCardWrapper, TopCardButton} from  "./top_card.styled.js";
import { getCarImage } from "../../../../utils/imageUtils.js";
import LoadingSpinner from "../../../../components/Loader/loadingSpinner.js";

const TopCards = () => {
    const [carsData, setCarsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleItems, setVisibleItems] = useState(3);

    // Fetch data from API on component mount
    useEffect(() => {
        const fetchCarsData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(API_URL);
                console.log("Fetched cars data:", response.data);
                setCarsData(response.data);
            } catch (error) {
                console.error("Error fetching cars data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCarsData();
    }, []);

    const displayedData = carsData.slice(0, visibleItems);

    const handleViewAllCars = () => {
        setVisibleItems(prev => (prev + 3));
    };

    const hideMore = visibleItems < carsData.length;

    // Loading state
    if (loading) {
        return <LoadingSpinner />;
    }

    // Error state
    if (error) {
        return (
            <TopCardContainer>
                <TopCardTitle>Error loading cars: {error}</TopCardTitle>
            </TopCardContainer>
        );
    }

    return (   
        <TopCardContainer>
            <TopCardTitle>Cardboard Overview</TopCardTitle>
            <TopCardWrapper>
                {displayedData.map(({ car_id, title, description, image_url, price }) => (
                    <CardItem
                        key={car_id}
                        id={car_id}
                        title={title}
                        description={description}
                        imageSrc={getCarImage(image_url)}
                        price={`${price}$`}
                    />
                ))}
            </TopCardWrapper>
            {hideMore && <TopCardButton onClick={handleViewAllCars}>View All Cars</TopCardButton>}
        </TopCardContainer>
    );
};

export default TopCards;
