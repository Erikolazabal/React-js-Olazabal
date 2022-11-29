import React, { useContext, useState } from 'react';
import CartItem from '../../components/CartItem';
import {Shop} from '../../contexts/Shop';
import generateOrderObject from '../../services/generateOrderObject';
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import './style.css';
import { Link } from "react-router-dom";
import noItems from '../../assets/noItems.png';
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsCartX } from "react-icons/bs";
import Swal from 'sweetalert2';


const CartContainer = () => {
    const {products, calculateTotal, emptyCart, totalItemsCart} = useContext(Shop)
    const[email, setEmail] = useState('');
    const[nombre, setNombre] = useState('');
    const[telefono, setTelefono] = useState('');

const errorMessage = validate(email, nombre, telefono);

    const emitirCompra = () => {
        //Mostrar un formulario de compra, donde el usuario ingrese sus datos
        (async ()=> {
           
            const generatedOrder = generateOrderObject(
                                            nombre,
                                            email,
                                            telefono,
                                            products,
                                            calculateTotal())
            console.log(generatedOrder);
            
            let productOutOfStock = []
            //Chequear el stock de los productos en el carrito
            for (const productInCart of products) {
                const docRef = doc(db, "products", productInCart.id);
                const docSnap = await getDoc(docRef);
                const productInFirebase = {...docSnap.data(), id: doc.id}
                if (productInCart.quantity > productInFirebase.quantity) productOutOfStock.push(productInCart)                
            }
    
            if (productOutOfStock.length === 0) {
    
                for (const productInCart of products) {
                        const productRef = doc(db, "products", productInCart.id);
            
                        const docSnap = await getDoc(productRef);
                        const productInFirebase = {...docSnap.data(), id: doc.id}
            
                        // Set the "capital" field of the city 'DC'
                        await updateDoc(productRef, {
                            quantity: productInFirebase.quantity - productInCart.quantity
                        });
                    }
                
                //Generar la orden
    
                // Add a new document with a generated id
                try {
                    const docRef = await addDoc(collection(db, "orders"), generatedOrder);
                    Swal.fire({
                        icon: 'success',
                        title: `${nombre} tu compra se realizó correctamente!`,
                        html: `Tu número de comprobante es: ${docRef.id}`})
                    
                    
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                alert("Hay algún producto fuera de stock")
            }
        })()

    }
    if (products.length === 0) {
        return (
          <section className=' bgcart vacio'>
            <div className='vacio'>
                <img src={noItems} className='noItemsimg' alt="no hay items" />
            </div>
            <div className='columnright'>
                <span className='overflow-hidden textone'>Tu carrito está vacío</span>
            <p className='textwo'>
                Parece que no has agregado ninguna burger a tu carrito 
            </p> 
            <div>
                <Link to="/">
                    <button className='btn btn-success p-3'>Ver Productos</button>
                </Link>
            </div>
            
            </div>
          </section>
        );
      } else {
    return (
        <section className='d-flex bgcart'>
            <div className='displayflex'>
                <div className='inline'>
                    <button onClick={emptyCart} className='botonvaciar btn p-3 '>
                    <span className='mx-2'>Vaciar Carrito</span>
                    <span>
                        <picture><BsCartX size={20}/></picture>
                    </span>
                    </button>
                </div>
            {products.map(product => {
                return <CartItem key={product.id} item={product}/>})}
            <div className='precioTotal'>
                <span className='mx-2'>Total</span><span className='mx-2'>$ {calculateTotal()},00</span><span className='mx-2'> x {totalItemsCart()} Item</span>
            </div>
            </div>
            <div className='formcart'>
                <span className='mejora'>Finaliza tu compra <picture><BsFillBagCheckFill size={20}/></picture></span>
                <form action="" onSubmit={ ev =>{
                        ev.preventDefault();                     
                    }}
                >
            <div className='mb-3'>
                <label className='form-label'>Nombre *</label>
                <input type="text" name="nombre" placeholder="nombre" autoComplete="off" value={nombre} onChange={ev => setNombre(ev.target.value)} className='form-control' required>
                </input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Telefono *</label>
                <input type="tel" name="telefono"  placeholder="Teléfono de contacto" value={telefono} onChange={ev => setTelefono(ev.target.value)} className='form-control' required>
                </input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Gmail *</label>
                <input type="mail" name="email" placeholder="Email" autoComplete="off" value={email}  onChange={ev => setEmail(ev.target.value)} className='form-control' required>
                </input>
            </div>
            <button  className='btn btn-success p-3 botonconfir' type="submit" value="Enviar datos" id="btn" disabled={errorMessage}  onClick={emitirCompra}>Confirmar compra</button>
                </form>
            </div>
        </section>
    )
}
}
const validate = (email, nombre, telefono) =>{
    if(!email.includes('@')) return 'Email incorrecto';
    if(nombre.length < 4) return 'Contraseña incorrecta';
    if(telefono === "") return 'Ingrese un telèfono';
}
export default CartContainer