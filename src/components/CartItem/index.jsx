import React, { useContext } from 'react'
import { Shop } from '../../contexts/Shop'
import { Theme } from '../../contexts/Theme';
import TrashCanIcon from '../TrashCanIcon'
import './style.css';
import Swal from 'sweetalert2';


const CartItem = ({item}) => {

  const {removeProduct} = useContext(Shop);
  const {themeColor} = useContext(Theme);

  const handleRemove = () => {
    Swal.fire({
      title: 'Seguro que desea borrarlo?',
      text: "Tendras que volver agregarlo para realizar la compra!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        removeProduct(item.id)
        Swal.fire(
          'Se elimino el producto!',
        )
      }
    })
  }

  return (
    <div className= {themeColor === "light" ? "cartstyle" : "cartstyle-dark"}>
        <img src ={item.img} width={150} alt='cart-item'/>
        <h3 className='overflow-hidden'>{item.name}</h3>
        <p className='fs-4 px-3 my-0'>{item.quantity}</p>
        <p className='fs-4 px-3 my-0'>${item.price}</p>
        <div className= {themeColor === "light" ? "iconlight" : "icon-dark"} style={{width: 30}} onClick={handleRemove}>
          <TrashCanIcon />
        </div>
    </div>
  )
}

export default CartItem