import React from 'react';
import { deleteItem } from './apiService';

const Item = ({ item, onDeleted }) => {
  const handleDelete = async () => {
    try {
      await deleteItem(item.id);
      onDeleted();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <span>{item.name}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Item;
