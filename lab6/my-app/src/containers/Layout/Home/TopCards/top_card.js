import React from "react";
import CardItem from "../../../../components/CardItem/cardItem.js"
import CarImg1 from "../../../../Icons/car1.png";
import CarImg2 from "../../../../Icons/car2.png";
import CarImg3 from "../../../../Icons/car3.png";
import {TopCardContainer, TopCardTitle, TopCardWrapper, TopCardButton} from  "./top_card.styled.js";  

const data = [
    { 
        title: "Car 1",
        description: "This is a great green car with excellent features and performance.", 
        imageSrc: CarImg1, 
        price: "250", 
    },
    { 
        title: "Car 2",
        description: "This is a stunning red car that offers a smooth ride and top-notch safety.", 
        imageSrc: CarImg2, 
        price: "100", 
    },
    { 
        title: "Car 3",
        description: "This is a vibrant orange car that combines style with performance.",
        imageSrc: CarImg3, 
        price: "320", 
    },
];

const TopCards = () => {
    return (   
        <TopCardContainer>
            <TopCardTitle>Cardboard Overview</TopCardTitle>
            <TopCardWrapper>
                {data.map(({ title, description, imageSrc, price }, index) => (
                    <CardItem
                        key={index}
                        title={title}
                        description={description}
                        imageSrc={imageSrc}
                        price={price}
                        index={index}
                    />
                ))}
            </TopCardWrapper>
            <TopCardButton>View All Cars</TopCardButton>
        </TopCardContainer>
    );
};

export default TopCards;
