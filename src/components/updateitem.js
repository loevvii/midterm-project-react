import React, { useState } from 'react';

const UpdateItem = ({ inventory, updateItemInInventory }) => {
  const [itemId, setItemId] = useState('');
  const [fieldToUpdate, setFieldToUpdate] = useState('quantity'); // Default to quantity
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();

    // Find the item in the inventory by ID
    const item = inventory.find((item) => item.id === itemId);

    if (!item) {
      setMessage('Item not found!');
      return;
    }

    const oldValue = item[fieldToUpdate]; // Get the old value (either quantity or price)

    // Update the item with the new value
    const updatedItem = {
      ...item,
      [fieldToUpdate]: parseFloat(newValue), // Convert new value to number
    };

    updateItemInInventory(updatedItem);

    // Display the success message
    setMessage(
      `The ${fieldToUpdate} of Item "${item.name}" has been updated from ${oldValue} to ${newValue}`
    );

    // Reset fields
    setItemId('');
    setNewValue('');
  };

  return (
    <section className="jumbotron jumbotron-fluid text-center bg-img pt-3 d-flex justify-content-center align-items-center">
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
    <img className= "bgimage4"src='bg4.jpg' width="1920" height="1080"></img>
    <div className='formcontainer table-container'>
      <h3>Update Item</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Input ID: </label>
          <input
            type="text"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Field to Update: </label>
          <select
            value={fieldToUpdate}
            onChange={(e) => setFieldToUpdate(e.target.value)}
          >
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </div>

        <div>
          <label>New Value: </label>
          <input
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            required
            step="any" // Allows decimals for price
          />
        </div>

        <button type="submit">Update Item</button>
      </form>

      {/* Display the message after submission */}
      {message && <p>{message}</p>}
    </div>
    </div>
    </section>
  );
};

export default UpdateItem;
