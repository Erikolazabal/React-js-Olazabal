import React from 'react';
import './styles.css';

const ItemDetail = ({character}) => {
  console.log(character);
  return (
    <div className='item-detail'>
      <img src={character.img} alt='product imagen' className='rounded' width={450}/>
      <div className='detalles nameDetail rounded'>
              <p>{character.country}</p>
              <h2>{character.name}</h2>
              <p className='text-bg-secondary p-3'>Caracteristicas : {character.dsc}</p>
              <p className='text-bg-success p-3 rounded' >Precio : ${character.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail