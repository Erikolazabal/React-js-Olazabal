import { createContext, useState } from "react";
import React from "react";
import Swal from 'sweetalert2';

export const Shop = createContext({});

const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (productToAdd) => {
        const flagRepeated = isProductRepeated(productToAdd.id);
        if (flagRepeated) {
            const productoRepetidoModificado = products.find(
                (productInCart) => productInCart.id === productToAdd.id
            );
            productoRepetidoModificado.quantity += productToAdd.quantity;
            const productosCartSinRepetido = products.filter(
                (productsInCart) => productsInCart.id !== productToAdd.id
            );
            setProducts([
                ...productosCartSinRepetido,
                productoRepetidoModificado,
            ]);
        } else {
            setProducts([...products, productToAdd]);
        }
    };

    //Equivalente a isInCart
    const isProductRepeated = (id) => {
        return products.some((product) => product.id === id);
    };

    //Eliminar un producto
    const removeProduct = (id) => {
        const productosCart = products.filter(
            (productsInCart) => productsInCart.id !== id
        );
        setProducts(productosCart);
    };

    //Vaciar todo el carrito
    const emptyCart = () => {
        Swal.fire({
            title: 'Seguro que desea borrar todos los items?',
            text: "Tendras que volver agregarlos para realizar tu compra!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
            setProducts([]);
              Swal.fire(
                'Se eliminaron los productos!',
              )
            }
          })
    };

    //Cálculo del total de compra
    const calculateTotal = () => {
        const total = products.reduce(
            (acc, productoActual) =>
                (acc += productoActual.quantity * productoActual.price),
            0
        );
        return total;
    };

    //Cálculo del total de items del carrito
    const totalItemsCart = () => {
        let total = 0;
        products.forEach((product) => (total += product.quantity));
        return total;
    };

    return (
        <Shop.Provider
            value={{
                products,
                addProduct,
                removeProduct,
                emptyCart,
                calculateTotal,
                totalItemsCart,
            }}
        >
            {children}
        </Shop.Provider>
    );
};

export default ShopProvider;
