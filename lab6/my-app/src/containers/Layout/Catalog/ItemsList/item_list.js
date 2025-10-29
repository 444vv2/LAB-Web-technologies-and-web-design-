import {React, useMemo} from "react";
import { ItemsListWrapper, ItemsGrid} from "./item_list.styled";
import CardItem from "../../../../components/CardItem/cardItem";
import CarImg1 from "../../../../Icons/car1.png";
import CarImg2 from "../../../../Icons/car2.png";
import CarImg3 from "../../../../Icons/car3.png";
import { useSearchParams } from "react-router-dom";

const data = [
    { 
        title: "Green Car 1",
        description: "This is a great green car with excellent features and performance.",
        imageSrc: CarImg1, 
        price: "250",
        color: "green",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        title: "Red Car 2",
        description: "This is a stunning red car that offers a smooth ride and top-notch safety.",
        imageSrc: CarImg2, 
        price: "100",
        color: "red",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        title: "Orange Car 3",
        description: "This is a vibrant orange car that combines style with cool performance.",
        imageSrc: CarImg3, 
        price: "320",
        color: "orange",
        priceCategory: "About",
        type: "Set"
    },
    { 
        title: "Green Car 1",
        description: "This is a great green car with excellent features and performance.",
        imageSrc: CarImg1, 
        price: "250",
        color: "green",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        title: "Red Car 2",
        description: "This is a stunning red car that offers a smooth ride and top-notch safety.",
        imageSrc: CarImg2, 
        price: "100",
        color: "red",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        title: "Orange Car 3",
        description: "This is a vibrant orange car that combines style with cool performance.",
        imageSrc: CarImg3, 
        price: "320",
        color: "orange",
        priceCategory: "About",
        type: "Set"
    },
    { 
        title: "Green Car 1",
        description: "This is a great green car with excellent features and performance.",
        imageSrc: CarImg1, 
        price: "250",
        color: "green",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        title: "Red Car 2",
        description: "This is a stunning red car that offers a smooth ride and top-notch safety.",
        imageSrc: CarImg2, 
        price: "100",
        color: "red",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        title: "Orange Car 3",
        description: "This is a vibrant orange car that combines style with cool performance.",
        imageSrc: CarImg3, 
        price: "320",
        color: "orange",
        priceCategory: "About",
        type: "Set"
    },
    { 
        title: "Green Car 1",
        description: "This is a great green car with excellent features and performance.",
        imageSrc: CarImg1, 
        price: "250",
        color: "green",
        priceCategory: "About",
        type: "Solo_car"
    }
];

const ItemsList = () => {
        const [searchParams] = useSearchParams();
        const q = (searchParams.get("q") || "").trim().toLowerCase();
        const filter1 = searchParams.get("filter1") || "";
        const filter2 = searchParams.get("filter2") || "";
        const filter3 = searchParams.get("filter3") || "";
    
        const filtered = useMemo(() => {
            let result = data;
            
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
            
            // Apply filter 2 (price category)
            if (filter2) {
                result = result.filter(item => item.priceCategory === filter2);
            }
            
            // Apply filter 3 (type)
            if (filter3) {
                result = result.filter(item => item.type === filter3);
            }
            
            return result;
        }, [q, filter1, filter2, filter3]);

    return (
        <ItemsListWrapper>
            <ItemsGrid>
                {filtered.map(({ title, description, imageSrc, price }, index) => (
                        <CardItem
                            key={index}
                            title={title}
                            description={description}
                            imageSrc={imageSrc}
                            price={price}
                            index={index}
                        />
                    ))}
                </ItemsGrid>
        </ItemsListWrapper>
    );
};

export default ItemsList;