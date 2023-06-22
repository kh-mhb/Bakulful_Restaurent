import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const HomeCarousel = () => {



    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100  carousel-img"
                    src="https://source.unsplash.com/1600x900/?chicken rice"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>EAT FRESH HERE</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100  carousel-img "
                    src="https://source.unsplash.com/1600x900/?burger"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>HEALTHY FOOD BRINGS YOU HAPPY</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100  carousel-img"
                    src="https://source.unsplash.com/1600x900/?phall Curry"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>YAMMY </h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeCarousel;