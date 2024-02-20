import React from 'react';
import { Carousel } from 'react-bootstrap';
import agregarProductosLocalStorage from "../Helps/ArrayPrducts"
import CardsC from "../components/CardsC"
import CarouselC from "../components/CarouselC"
import Header from "../components/Header";

const HomePage = () => {
  agregarProductosLocalStorage()
  const arrayProductos = JSON.parse(localStorage.getItem ('products')) || [];
  const urlImageHomePage = "https://i.ytimg.com/vi/xaHsm-8vE7w/maxresdefault.jpg"

  return (
    <>
      <div className="carousel-container">
        <Carousel className="w-100 h-100">
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="https://images.squarespace-cdn.com/content/v1/5b63290096d455957b1edc85/1533231470811-03P7MORBPE6OOYFWVUYH/GS-HERO.png?format=2500w"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="https://www.attitude.co.uk/wp-content/uploads/sites/5/2023/06/Gymshark.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="https://www.reasonwhy.es/media/library/gymshark-david-laid.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container mt-5">
        <div className="row">
          {
            arrayProductos.map((producto) => 
            <CardsC producto={producto} key={producto.id}/>)
          }
        </div>
      </div>
    </>
  )
}

export default HomePage
