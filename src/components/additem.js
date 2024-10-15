import React, { useState } from 'react';

const AddItem = ({ addItemToInventory }) => {
  const [item, setItem] = useState({
    id: '',
    name: '',
    quantity: 0,
    price: 0.0,
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItemToInventory(item); // Pass the new item up to App.js
    setItem({
      id: '',
      name: '',
      quantity: 0,
      price: 0.0,
      category: '',
    });
  };

  return (
    <div className='additemcontainer'>
      <h2>Add Item to Inventory</h2>
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={item.id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            step="0.01"
            value={item.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            name="category"
            value={item.category}
            onChange={handleInputChange}
          >
            <option value="blank"></option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Books">Books</option>
          </select>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
