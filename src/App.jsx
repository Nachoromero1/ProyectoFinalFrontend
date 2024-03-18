import Footer from "./components/Footer"
import NavbarC from "./components/NavbarC"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import RegisterPage from "./pages/RegisterPage"
import { BrowserRouter, Router, Routes, Route }from 'react-router-dom'

const App = () => {
  return(
   <>
        <NavbarC />
       <BrowserRouter>     
        <Routes>
          <Route path="/" element={ <HomePage />}/>
          <Route path="/register" element={ <RegisterPage />}/>
          <Route path="/product/:id" element={<ProductPage />}/>
          <Route path="*" element={ <ErrorPage/>} />
          
        </Routes>
       </BrowserRouter>
       <Footer />
   </>
  )
} 

export default App