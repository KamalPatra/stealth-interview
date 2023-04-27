import React from "react";

const Product = ({ product }) => {
  // const calculateDiscount = (price) => {
  //   let discountedPrice = price;
  //   if (price >= 500) {
  //     discountedPrice = price * 0.6;
  //   } else if (price <= 499.99) {
  //     discountedPrice = price * 0.7;
  //   } else if (price < 100 && price >= 20) {
  //     discountedPrice = price * 0.8;
  //   }
  //   return discountedPrice;
  // };
  return (
    <div className="product" key={product.id}>
      <div className="mobile">
        <img src={product.image} alt="" className="mobile-bg" />
      </div>
      <h2 className="product-title">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className={`product-price price-${product.id}`}>${product.price}</p>
      {/* <p className="discount">${calculateDiscount(product.price)}</p> */}
    </div>
  );
};

export default Product;
