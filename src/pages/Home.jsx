import React from "react";
import { useSelector } from "react-redux";

import Product from "../components/Product";
// import { productsList } from "../utils/ProductsList";

export default function Home() {
  const productsList = useSelector((state) => state.products.list);

  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          productid={id}
          key={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
