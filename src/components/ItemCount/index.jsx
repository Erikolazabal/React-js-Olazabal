import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({onAdd, stock, initial}) => {

    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }
    return <div>
                <div className="countDetail">
                    <button onClick={onDecrement} className="btn btn-light">-</button>
                    <span className="btn btn-light mx-2">{count}</span>
                    <button onClick={onPlus} className="btn btn-light">+</button>
                </div>
                <button onClick={()=>onAdd(count)} className="btn btn-success">Confirm purchase</button>
            </div>;
};

export default ItemCount;
