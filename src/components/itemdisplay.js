import React, { useState } from 'react';

const ItemDisplay = ({ inventory = [] }) => {
    return (
      <div className="itemdisplay">
        {inventory.length > 0 ? (
          <table border="1" cellPadding="10" cellSpacing="0">
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
              {inventory.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No items in the inventory.</p>
        )}
      </div>
    );
  };
  
  export default ItemDisplay;
  