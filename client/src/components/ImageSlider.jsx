// src/components/ImageSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importa las imágenes explícitamente
import image1 from '../assets/slider1.avif';
import image2 from '../assets/slider2.avif';
import image3 from '../assets/slider3.avif';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="image-slider">
            <Slider {...settings}>
                {/* Usamos las imágenes importadas */}
                <div><img src={image1} alt="Slider 1" /></div>
                <div><img src={image2} alt="Slider 2" /></div>
                <div><img src={image3} alt="Slider 3" /></div>
            </Slider>
        </div>
    );
};

export default ImageSlider;
