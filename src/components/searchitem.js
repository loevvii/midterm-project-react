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
    <section className="jumbotron jumbotron-fluid text-center bg-img pt-3 d-flex justify-content-center align-items-center">
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
    <img className= "bgimage4"src='bg4.jpg' width="1920" height="1080"></img>
    <div className='formcontainer table-container'>
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
    </div>
    </section>
  );
};

export default SearchItem;
