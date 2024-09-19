import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProducts,
  fetchProductsError,
  updateAllProducts,
} from "../store/slices/productsSlice";

export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateAllProducts(data));
      })
      .catch(() => {
        dispatch(fetchProductsError("Check api not able to fetch"));
      });
  });

  // const iserror = useSelector((state) => state.products.error);

  // console.log(iserror);

  const cartItem = useSelector((state) => state.cartItems.list);
  // console.log(cartItem);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItem.reduce((acc, curr) => acc + curr.quantity, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
}
