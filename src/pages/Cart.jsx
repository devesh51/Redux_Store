import React from "react";
import CartItem from "../components/CartItems";

import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector(({ products, cartItems }) => {
    return cartItems.list.map(({ productid, quantity }) => {
      const cartProduct = products.list.find(
        (product) => product.id === productid
      );
      return { ...cartProduct, quantity };
    });
  });
  console.log(cartItems);
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ id, title, rating, price, image, quantity }) => (
          <CartItem
            productid={id}
            key={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={image}
            rating={rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">
            $
            {cartItems.reduce(
              (acc, curr) =>
                acc + parseInt(curr.quantity) * parseInt(curr.price),
              0
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
