import React, {useEffect, useState} from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import {SyncLoader} from 'react-spinners'

export default function ItemListContainer ({greeting}) {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    console.log(categoryId);

    useEffect(()=> {
        ( async ()=> {
            try{
                let response;
                if (categoryId) {
                    response = await fetch(`https://ig-food-menus.herokuapp.com/burgers?_limit=16&${categoryId}`);
                } else {
                    response = await fetch(`https://ig-food-menus.herokuapp.com/burgers?_limit=16`);
                }
                console.log(response);
                const data = await response.json();
                console.log(data);
                setProducts(data)
            } catch (error) {
                console.log(error);
        }
        })()
    }, [categoryId])

    console.log(products);

    return (
        <>
            {products.length ? <ItemList products={products}/> : <SyncLoader color="rgba(66, 148, 27, 1)" size={20}/> }
        </>
    )
}