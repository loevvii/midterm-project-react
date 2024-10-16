import React, { useState } from 'react';

const DisplayByCategory = ({ inventory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Handler for when the category is selected from the dropdown
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter the items based on the selected category
  const filteredItems = inventory.filter(item => item.category === selectedCategory);

  return (
    <div>
      <h3>Display Items by Category</h3>

      <div>
        <label>Select Category: </label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">--Select a Category--</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Food">Food</option>
          <option value="Books">Books</option>
        </select>
      </div>

      {selectedCategory && (
        <>
          <h4>Items in Category: {selectedCategory}</h4>
          {filteredItems.length > 0 ? (
            <table border="1" cellPadding="10" cellSpacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{typeof item.price === 'number' ? item.price.toFixed(2) : 'Invalid Price'}</td> {/* Ensure price has two decimal points */}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No items found in this category.</p>
          )}
        </>
      )}
    </div>
  );
};

export default DisplayByCategory;
