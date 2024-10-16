import React, { useState } from 'react';

const RemoveItem = ({ inventory, removeItemFromInventory }) => {
  const [itemId, setItemId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemove = (e) => {
    e.preventDefault();

    // Find the item by ID
    const item = inventory.find((item) => item.id === itemId);

    if (!item) {
      setMessage('Item not found!');
      return;
    }

    // Remove the item from inventory
    removeItemFromInventory(itemId);

    // Show success message
    setMessage(`Item "${item.name}" has been removed from the inventory`);

    // Reset the input field
    setItemId('');
  };

  return (
    <section className="jumbotron jumbotron-fluid text-center bg-img pt-3 d-flex justify-content-center align-items-center">
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
    <img className= "bgimage4"src='bg4.jpg' width="1920" height="1080"></img>
    <div className='formcontainer table-container'>
      <h3>Remove Item</h3>
      <form onSubmit={handleRemove}>
        <div>
          <label>Input ID: </label>
          <input
            type="text"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
            required
          />
        </div>

        <button type="submit">Remove Item</button>
      </form>

      {/* Display the message */}
      {message && <p>{message}</p>}
    </div>
    </div>
    </section>
  );
};

export default RemoveItem;
