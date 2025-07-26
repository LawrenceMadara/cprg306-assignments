"use client"

import { useState } from "react";


export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            id: Math.random().toString(36).substring(2, 9),
            name, 
            quantity, 
            category
        };

        onAddItem(newItem);

        // console.log(item);
        // alert(
        //     `Added Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
        // );

        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    let decButton = "bg-white hover:bg-gray-400 text-black rounded px-3 mr-2";
    let incButton = "bg-yellow-600 hover:bg-green-500 text-white rounded px-3";

    return(
        <form onSubmit={handleSubmit} 
        className="p-2 m-4 bg-red-900 text-black max-w-sm w-full border-3 border-white rounded-2xl"
        >
            <div className='mb-2'>
                <input 
                type="text" 
                className="bg-white w-full mt-1 border-4 border-blue-500 p-2 rounded-lg font-sans"
                placeholder="Item Name" 
                required 
                value={name} 
                onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div className="flex justify-between">
                <div className="flex justify-center bg-blue-900 rounded-lg p-2 w-37">
                    <p className="text-white mr-10">{quantity}</p>
                    <button 
                    type="button"
                    className={decButton}
                    onClick={decrement} 
                    disabled={quantity === 1}>-</button>
                    <button 
                    type="button"
                    className={incButton}
                    onClick={increment}
                    disabled={quantity===20}>+</button>  
                    </div>
                <div>
                    <select 
                    className="bg-blue-900 text-white ml-1 p-2 rounded-lg font-sans"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    >
                        <option value disabled>Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div>
                <button 
                type="submit" 
                className="w-full mt-4 py-2 px-4 bg-yellow-600 text-white font-bold rounded-lg hover:bg-green-500">
                Add
                </button>
            </div>

        </form>

    )

}

