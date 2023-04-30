import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Common.scss";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
// import ProbStudent from "./pages/ProbStudent";
import NotFound from "./pages/NotFound";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios("https://jsonplaceholder.typicode.com/comments");
      setProducts(res.data.slice(0, 10));
    };
    getProducts();
    const getPhotos = async () => {
      const res = await axios("https://jsonplaceholder.typicode.com/photos");
      setPhotos(res.data.slice(0, 10));
    };
    getPhotos();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} photos={photos} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetailPage products={products} photos={photos} />}
          />

          {/* 실습 */}
          {/* <Route path="/student/:name" element={<ProbStudent />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
