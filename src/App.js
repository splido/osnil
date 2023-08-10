import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Addcompany from "./components/Addcompany";
import Login from "./components/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [products, setProducts] = useState([])
  const [isAuthenticated, setIsAuthenticated]=useState(false)
  useEffect(()=>{
    fetchData()
  
  },[])

  const apiUrl = 'https://appsalabackend-p20y.onrender.com/products'
  

  const fetchData = async() =>{
    const response = await fetch(apiUrl)
    const data = await response.json()
    setProducts(data)
   
  }

 





  return (
  <>
   
    <Router>
    <Navbar products={products} />
    <Routes>
    <Route exact path="/" element={<Home products={products}/>} />
    <Route path="/category/:slug" element={<ProductList/>} />
    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
    <Route path="/form" element={<PrivateRoute isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} >
    <Route path="/form" element={<Addcompany/>} />
    </Route>
    <Route path="/product/:slug" element={<Product products={products}/>} />
    </Routes>
    </Router>
    <Footer/>
  </>
  );
}

export default App;
