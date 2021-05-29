import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {

  const products = useSelector((state) => {
    return state.shop.products;
  });

  return (
    <div className="container">
      <div className="row">
        {products.map((pd) => (
          <SingleProduct product={pd} key={pd._id} products={products} />
        ))}
      </div>
    </div>
  );
};

export default Products;
