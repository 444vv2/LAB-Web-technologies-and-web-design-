import React from "react";
import {HeroContainer, HeroTitle, HeroSubtitle, LogosWrapper, LogoItem, LogoImage } from "./hero.styled.js";
import HeroImg1 from "../../../Icons/hero_icons/bmw.png";
import HeroImg2 from "../../../Icons/hero_icons/ferrari.png";
import HeroImg3 from "../../../Icons/hero_icons/maserati.png";
import HeroImg4 from "../../../Icons/hero_icons/mclaren.png";
import HeroImg5 from "../../../Icons/hero_icons/lamborghini.png";
import HeroImg6 from "../../../Icons/hero_icons/porshe.png";
import HeroImg7 from "../../../Icons/hero_icons/jaguar.png";
import HeroImg8 from "../../../Icons/hero_icons/audi.png";
import HeroImg9 from "../../../Icons/hero_icons/chevrolet.png";
import HeroImg10 from "../../../Icons/hero_icons/mazda.png";

const Hero = () => {
    const carLogos = [
        { src: HeroImg1, alt: "BMW" },
        { src: HeroImg2, alt: "Ferrari" },
        { src: HeroImg3, alt: "Maserati" },
        { src: HeroImg4, alt: "McLaren" },
        { src: HeroImg5, alt: "Lamborghini" },
        { src: HeroImg6, alt: "Porsche" },
        { src: HeroImg7, alt: "Jaguar" },
        { src: HeroImg8, alt: "Audi" },
        { src: HeroImg9, alt: "Chevrolet" },
        { src: HeroImg10, alt: "Mazda" }
    ];

    return (
        <HeroContainer>
            <HeroTitle>Welcome to Hot Wheels</HeroTitle>
            <HeroSubtitle>Assemble your dream mini fleet right now!</HeroSubtitle>
            <LogosWrapper>
                {carLogos.map((logo, index) => (
                    <LogoItem key={index}>
                        <LogoImage 
                            src={logo.src} 
                            alt={logo.alt}
                        />
                    </LogoItem>
                ))}
            </LogosWrapper>
        </HeroContainer>
    );
};

export default Hero;