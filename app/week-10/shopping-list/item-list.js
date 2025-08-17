'use client';

import { useState } from 'react';
import Item from './item';
import { Roboto_Flex } from 'next/font/google';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  // let sortedItems = [...items];
  // if (sortBy === 'name') {
  //   sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  // } else {
  //   sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  // }
  const sortedItems = [...items].sort((a, b) =>
  a[sortBy].localeCompare(b[sortBy])
  );

  const buttonStyle = (active) => ({
    width: '100px',
    padding: '5px 13px',
    marginRight: '10px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: active ? 'orange' : 'maroon',
    color: active ? 'black' : 'white',
  });


  return (
    <div>
      <div className='flex items-center space-x-4 pt-5'>
        <h2 className='font-bold'>Sort by:</h2>
        <button style={buttonStyle(sortBy === 'name')} onClick={() => setSortBy('name')}>Name</button>
        <button style={buttonStyle(sortBy === 'category')} onClick={() => setSortBy('category')}>Category</button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            iName={item.name}
            iQuantity={item.quantity}
            iCategory={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}
