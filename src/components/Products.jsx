import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="product-list">
      <h1 className="header">New Release</h1>
      <p className="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
        nobis.
      </p>
      <div className="products-container">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
