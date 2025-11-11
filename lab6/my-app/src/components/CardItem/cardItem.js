import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, CardImage, CardTitle, CardFooter, CardPrice, CardButton} from "./cardItem.styled";

const CardItem = ({ title, description, imageSrc, price, index }) => {
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate(`/catalog/${index}`);
    };

    return (
        <CardContainer className="card-item">
            <CardImage src={imageSrc} alt={title} />
            <CardTitle>{title}</CardTitle>
            <p>{description}</p>
            <CardFooter>
              <CardPrice>Price: {price} $</CardPrice>
              <CardButton className="Button" onClick={handleViewMore}>View more</CardButton>
            </CardFooter>
        </CardContainer>
    );
};

export default CardItem;
