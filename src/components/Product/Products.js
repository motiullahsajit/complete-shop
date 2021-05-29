import React, { useEffect, useState } from "react";
import productsData from "../../fakeData/productData.json";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(productsData);
  useEffect(() => {
    setProducts(productsData);
  }, []);
  return (
    <div className="container">
      <div className="row">
        {products.map((pd) => (
          <SingleProduct product={pd} key={pd.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
