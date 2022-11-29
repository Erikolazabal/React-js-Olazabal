import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import { Theme } from '../../contexts/Theme';
import CartIcon from "../CartIcon";
import './styles.css'; 

const CartWidget = () => {
  const navigate = useNavigate();
  const {totalItemsCart} = useContext(Shop);
  const {themeColor} = useContext(Theme);

  return (
    <div className= {themeColor === "light" ? "cartlight" : "cartdark"} onClick ={()=> navigate("/cart")}
    >
      <CartIcon className= {themeColor === "light" ? "icon-dark" : "iconlight"} />
            <span>{totalItemsCart() === 0 ? null : `(${totalItemsCart()})`}</span>
    </div>
  )
}

export default CartWidget