
import agregarProductosLocalStorage from "../Helps/ArrayPrducts"
import CardsC from "../components/CardsC"
import CarouselC from "../components/CarouselC"

const HomePage = () => {
  agregarProductosLocalStorage()
  const arrayProductos = JSON.parse(localStorage.getItem ('products')) || [];
  const urlImageHomePage = "https://i.ytimg.com/vi/xaHsm-8vE7w/maxresdefault.jpg"


  return (
    <>
    <CarouselC urlImage={urlImageHomePage } ancho={'100%'} />
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