import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    useEffect(() => {

        const getCharacterDetail = async () => {
            const response = await fetch(`https://ig-food-menus.herokuapp.com/burgers/${id}`)
            const character = await response.json();
            setCharacter(character)
        }
        getCharacterDetail()
    }, [id])

    return (character ? <ItemDetail character={character}/> : <SyncLoader color="rgba(66, 148, 27, 1)" size={20}/> )
};

export default ItemDetailContainer;
