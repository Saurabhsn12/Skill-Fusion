import React from 'react';
import "../Styles/Banner.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo1 from "../Data/banners/ban1.png";
import photo2 from "../Data/banners/ban2.jpg";
import photo3 from "../Data/juevent/ong8.jpg";
import photo4 from "../Data/banners/ban3.jpg";

const Banner = ({ banner }) => {
    return (
        <Carousel>
            <Carousel.Item>
               <a href="/login"> <img
                    className="d-block w-100"
                    src={photo1}
                    alt="First slide"
                /></a>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={photo2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={photo3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={photo4}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;



