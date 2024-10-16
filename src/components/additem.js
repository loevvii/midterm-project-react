import React, { useState } from 'react';

const AddItem = ({ addItemToInventory, inventory }) => {
  const [item, setItem] = useState({
    id: '',
    name: '',
    quantity: '',
    price: '',
    category: '',
  });

  const [message, setMessage] = useState("");

  // Function to strip leading zeros and prevent non-numeric input
  const removeLeadingZerosAndNonNumeric = (value) => {
    return value.replace(/^0+/, '').replace(/[^\d]/g, ''); // Remove leading zeros and non-digits
  };

  // Handle number input for quantity and price, restricting invalid input
  const handleNumberInput = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = removeLeadingZerosAndNonNumeric(value);
    
    setItem({
      ...item,
      [name]: name === 'quantity' || name === 'price' ? Number(value) : value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if an item with the same ID already exists in the inventory
    const duplicateItem = inventory.find((invItem) => invItem.id === item.id);

    if (duplicateItem) {
      setMessage(`Item with ID ${item.id} already exists. Please use a different ID.`);
    } else {
      addItemToInventory(item); // Pass the new item up to App.js
      setItem({
        id: '',
        name: '',
        quantity: '',
        price: '',
        category: '',
      });
      setMessage("Item added successfully!");
    }
  };

  return (
    <section className="jumbotron jumbotron-fluid text-center bg-img pt-3 d-flex justify-content-center align-items-center">
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <img className= "bgimage4"src='bg4.jpg' width="1920" height="1080"></img>
    <div className='formcontainer table-container'>
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
            type="text"
            name="quantity"
            value={item.quantity}
            onInput={handleNumberInput} // Manually handle numeric input
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={item.price}
            onInput={handleNumberInput} // Manually handle numeric input
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
            <option value=""disabled>--Select a Category--</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Books">Books</option>
          </select>
        </div>
        <button type="submit" disabled={!item.category}>Add Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
    </section>
  );
};

export default AddItem;
