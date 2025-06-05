"use client"

import { useState } from "react";


export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity <= 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity => 1) {
            setQuantity(quantity - 1);
        }
    };

    let decButton = "bg-white hover:bg-gray-400 text-black rounded px-3 mr-2";
    let incButton = "bg-yellow-600 hover:bg-yellow-400 text-white rounded px-3";

    return(
        <div className="flex justify-center bg-blue-900 p-2 w-37">
            <p className="text-white mr-10">{quantity}</p>
            <button 
                className={decButton}
                onClick={decrement} 
                disabled={quantity === 1}>-</button>
            <button 
                className={incButton}
                onClick={increment}
                disabled={quantity===20}>+</button>  

        </div>
    )

}

