import React from 'react';
import './Slideshow.scss';
import { Carousel } from 'react-bootstrap';

export const Slideshow: React.FC<ICarousel> = ({ listbanner }) => {
  return (
    <div className="slideshow">
      <Carousel >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/banner/920x420_hgb.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/banner/920x4200_Shopeepay.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/banner/TrangManga920x420.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/banner/920x420_phienchodocu.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
