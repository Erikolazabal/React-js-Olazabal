import React, { useContext } from "react";
import Item from "../Item";
import { Theme } from '../../contexts/Theme';
import './styles.css';


const ItemList = ({ products }) => {

    const {themeColor} = useContext(Theme);
    return (
        <div className={themeColor === "light" ? "item-list-container" : "item-list-container-Dark"} >
            {products.map((product) => {
                return <Item key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ItemList;
