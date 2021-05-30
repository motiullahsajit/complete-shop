import React from "react";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Product/Products";
import NavHeader from "../../SharePages/NavHeader/NavHeader";
const Home = () => {
  return (
    <>
      <NavHeader />
      <Banner />
      <Products />
    </>
  );
};

export default Home;
