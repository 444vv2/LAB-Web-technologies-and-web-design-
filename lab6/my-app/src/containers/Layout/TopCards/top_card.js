import React from "react";
import CardItem from "../../../components/CardItem/cardItem.js"
import CarImg1 from "../../../Icons/car1.png";
import CarImg2 from "../../../Icons/car2.png";
import CarImg3 from "../../../Icons/car3.png";
import {TopCardContainer, TopCardTitle, TopCardWrapper} from  "./top_card.styled.js";  

const data = [
    { 
        title: "Car 1", 
        imageSrc: CarImg1, 
        price: "250", 
    },
    { 
        title: "Car 2", 
        imageSrc: CarImg2, 
        price: "100", 
    },
    { 
        title: "Car 3", 
        imageSrc: CarImg3, 
        price: "320", 
    },
];

const TopCards = () => {
    return (   
        <TopCardContainer>
            <TopCardTitle>Cardboard Overview</TopCardTitle>
            <TopCardWrapper>
                {data.map(({ title, imageSrc, price }, index) => (
                    <CardItem
                        key={index}
                        title={title}
                        imageSrc={imageSrc}
                        price={price}
                        index={index}
                    />
                ))}
            </TopCardWrapper>
        </TopCardContainer>
    );
};

export default TopCards;
