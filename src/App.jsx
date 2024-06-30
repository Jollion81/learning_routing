import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./components/Pages/AboutPage"
import ContactPage from "./components/Pages/ContactPage"
import Footer from "./components/Footer"
import HomePage from "./components/Pages/HomePage"
import Nav from "./components/Nav"
import ProductPage from "./components/Pages/ProductPage"
import BookListingPage from "./components/Pages/BookListingPage"
import BookDetailPage from "./components/Pages/BookDetailPage"

function App() {
  return (
    <BrowserRouter>
      
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/books" element={<BookListingPage/>}/>
          <Route path="/book/:id" element={<BookDetailPage/>}/>
        </Routes>
        
        <Footer/>
  
    </BrowserRouter>
  )
}
export default App
