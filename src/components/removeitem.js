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
    <div>
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
  );
};

export default RemoveItem;
