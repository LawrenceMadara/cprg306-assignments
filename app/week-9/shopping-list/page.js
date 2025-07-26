"use client"

import { useState } from "react";
import ItemList from "../../week-8/item-list";
import NewItem from "../../week-8/new-item";
import itemsData from "./items.json";
import MealIdeas from "../../week-8/meal-ideas";


export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");


    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (itemName) => {
    let cleanedName = itemName
      .split(",")[0]                     
      .replace(/[^\w\s]/gi, "") 
      .trim()
      .toLowerCase(); 
    setSelectedItemName(cleanedName);
  };

    return(
        <main className= "bg-green-900 flex  p-5">
            <div className="flex-1 max-w-sm m-2">
                <h1 className ="text-3xl font-bold">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1 max-w-sm m-2 pt-7">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}
