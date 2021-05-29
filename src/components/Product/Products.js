import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const ProductData = (state) => state.shop.products;

  const products = useSelector(ProductData);
  console.log(products);

  return (
    <div className="container">
      <div className="row">
        {products.map((pd) => (
          <SingleProduct product={pd} key={pd._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
