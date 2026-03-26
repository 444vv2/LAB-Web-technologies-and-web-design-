import React, {useState} from "react";
import CardItem from "../../../../components/CardItem/cardItem.js"
import CarImg1 from "../../../../Icons/car1.png";
import CarImg2 from "../../../../Icons/car2.png";
import CarImg3 from "../../../../Icons/car3.png";
import {TopCardContainer, TopCardTitle, TopCardWrapper, TopCardButton} from  "./top_card.styled.js";  

const data = [
    { 
        id: 1,
        title: "Car 1",
        description: "This is a great green car with excellent features and performance.", 
        imageSrc: CarImg1, 
        price: "250", 
    },
    { 
        id: 2,
        title: "Car 2",
        description: "This is a stunning red car that offers a smooth ride and top-notch safety.", 
        imageSrc: CarImg2, 
        price: "100", 
    },
    { 
        id: 3,
        title: "Car 3",
        description: "This is a vibrant orange car that combines style with performance.",
        imageSrc: CarImg3, 
        price: "320", 
    },
{ 
        id: 4,
        title: "Car 4",
        description: "This is a great green car with excellent features and performance.", 
        imageSrc: CarImg1, 
        price: "250", 
    },
    { 
        id: 5,
        title: "Car 5",
        description: "This is a stunning red car that offers a smooth ride and top-notch safety.", 
        imageSrc: CarImg2, 
        price: "100", 
    },
    { 
        id: 6,
        title: "Car 6",
        description: "This is a vibrant orange car that combines style with performance.",
        imageSrc: CarImg3, 
        price: "320", 
    },
];

const TopCards = () => {

    const [visibleItems, setVisibleItems] = useState(3);
    const displayedData = data.slice(0, visibleItems);

    const handleViewAllCars = () => {
        setVisibleItems(prev => (prev + 3));
    };

    const hideMore = visibleItems < data.length;

    return (   
        <TopCardContainer>
            <TopCardTitle>Cardboard Overview</TopCardTitle>
            <TopCardWrapper>
                {displayedData.map(({ id, title, description, imageSrc, price }) => (
                    <CardItem
                        key={id}
                        title={title}
                        description={description}
                        imageSrc={imageSrc}
                        price={price}
                    />
                ))}
            </TopCardWrapper>
            {hideMore && <TopCardButton onClick={handleViewAllCars}>View All Cars</TopCardButton>}
        </TopCardContainer>
    );
};

export default TopCards;
