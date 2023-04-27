import "./App.css";
import "./index.css";
import image1 from "./assets/images/flat-lay-arrangement-colourful-paper-sheets_23-2148603800.jpeg";
import image2 from "./assets/images/flat-lay-assortment-multicolored-paper-sheets_23-2148603782.png";
import image3 from "./assets/images/top-view-composition-colourful-paper-sheets_23-2148603797.jpeg";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import { useEffect } from "react";
import { updatePrices } from "./discount-widget.js";

function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Lorem ipsum dolor sit",
      price: 240,
      image: image1,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Lorem ipsum dolor sit",
      price: 320,
      image: image2,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Lorem ipsum dolor sit",
      price: 400,
      image: image3,
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      updatePrices();
    }, 0);
  }, []);
  return (
    <>
      <Banner />
      <Hero />
      <div className="padding">
        <Products products={products} />
        <Explore />
        <Footer />
      </div>
    </>
  );
}

export default App;
