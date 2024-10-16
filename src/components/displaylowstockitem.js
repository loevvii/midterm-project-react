import React from 'react';

const DisplayLowStockItems = ({ inventory }) => {
  const lowStockItems = inventory.filter(item => item.quantity <= 5);

  return (
    <div>
      <h3>Low Stock Items</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {lowStockItems.length > 0 ? (
            lowStockItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No low stock items found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayLowStockItems;
