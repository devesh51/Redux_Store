import React from "react";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  removeCartItemQuantity,
} from "../store/slices/cartSlice";

export default function CartItem({
  productid,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          onClick={() => {
            dispatch(removeCartItemQuantity({ productid }));
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            dispatch(addCartItem({ productid }));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(removeCartItem({ productid }));
          }}
        >
          Remove
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
