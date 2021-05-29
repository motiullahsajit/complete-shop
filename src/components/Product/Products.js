import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = (props) => {
  console.log(props);
  const [foods, setFoods] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/allFoods`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  let meals = [...foods];

  if (inputSearch.length > 0) {
    meals = meals.filter((food) => {
      return (
        food.mealName.match(inputSearch) ||
        food.category.match(inputSearch) ||
        String(food.price).match(inputSearch) ||
        food.mealName.toLowerCase().match(inputSearch) ||
        food.category.toUpperCase().match(inputSearch)
      );
    });
    console.log(meals);
  }

  return (
    <div className="container-fluid d">
      <div className="row">
        <div className="col-lg-12">
          <h3>there are foods {foods.length}</h3>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
                placeholder="Search Your Food by 
            Name or Category or Price"
              />
            </div>
          </div>
          <div className="row">
            {meals.length === 0 ? (
              "not found"
            ) : (
              <>
                {meals.map((food) => (
                  <SingleProduct food={food} key={food._id} meals={meals} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};

export default connect(mapStateToProps)(Products);
