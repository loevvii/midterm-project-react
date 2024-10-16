import React, { useState } from 'react';

const SearchItem = ({ inventory }) => {
  const [searchId, setSearchId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = () => {
    const item = inventory.find(item => item.id === searchId);
    if (item) {
      setFoundItem(item);
      setMessage('');
    } else {
      setFoundItem(null);
      setMessage('Item not found!');
    }
  };

  return (
    <div>
      <h3>Search Item</h3>
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Enter Item ID"
      />
      <button onClick={handleSearch}>Search</button>
      
      {foundItem && (
        <div>
          <h4>Item Details:</h4>
          <p>ID: {foundItem.id}</p>
          <p>Name: {foundItem.name}</p>
          <p>Quantity: {foundItem.quantity}</p>
          <p>Price: ${foundItem.price.toFixed(2)}</p>
          <p>Category: {foundItem.category}</p>
        </div>
      )}
      
      {message && <p>{message}</p>}
    </div>
  );
};

export default SearchItem;
