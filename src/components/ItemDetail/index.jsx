import React, { useState, useContext } from 'react';
import { Shop } from "../../contexts/Shop";
import ItemCount from "../ItemCount";
import { Theme } from '../../contexts/Theme';
import { useNavigate } from "react-router-dom";
import './styles.css';

const ItemDetail = ({character}) => {
  const navigate = useNavigate();
  const {addProduct} = useContext(Shop);
  const [quantityItemDetail, setQuantityItemDetail] = useState(0);

  const confirmPurchase = (quantity) => {
    addProduct({...character, quantity})
    setQuantityItemDetail(quantity);
};
    
    const {themeColor} = useContext(Theme);
    const handleNavigate = () => {
      navigate('/cart')
    }
  return (
    <div className= {themeColor === "light" ? "item-detail" : "item-detail-dark"}>
      <img src={character.img} alt='product imagen' className='rounded' width={450}/>
      <div className='detalles nameDetail rounded'>
              <p>{character.country}</p>
              <h2 className='overflow-hidden'>{character.name}</h2>
              <p className='text-bg-secondary p-3 mb-0'>Caracteristicas : {character.dsc}</p>
              <p className='bg-secondary p-2 text-white bg-opacity-50 fs-5 p-3 mb-0 rounded align-self-end' >Precio : ${character.price}</p>
        {quantityItemDetail ? 
        <button className='btn btn-light' onClick={handleNavigate}>Ver Carrito</button>
      : 
        <ItemCount onAdd={confirmPurchase} initial={1} stock={character.quantity} />
      }
      </div>
    </div>
  )
}

export default ItemDetail