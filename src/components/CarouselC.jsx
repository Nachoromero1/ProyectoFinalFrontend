import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const CarouselC = ({urlImage, ancho }) => {

  return (
    <>
     <img src= {urlImage} alt="" width={ancho}/>
    </>
  )
}

export default CarouselC