import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'


const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = () => {
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div onClick={navigateDetail} className="card-detail">
      <img src={product.img} alt="character" className='rounded' width={250}/>
      <p className='fs-3 text-bg-light p-3 rounded' key={product.id}>{product.name}</p>
        <div className='text-bg-warning p-3 datosBurgers'>
          <p className='bajarlo' key={product.price}>Precio : ${product.price}</p>
          <p className='bajarlo' key={product.stock}>stock: {product.quantity}</p>
        </div>
    </div>
  )
}

export default Item