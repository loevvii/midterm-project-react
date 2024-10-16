import React, { useState } from 'react';

const ItemDisplay = ({ inventory = [] }) => {
    return (
        <section className="jumbotron jumbotron-fluid text-center bg-img pt-3 d-flex justify-content-center align-items-center">
        <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <img className= "bgimage4"src='bg4.jpg' width="1920" height="1080"></img>
      <div className="itemdisplay table-container">
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
      </div>
      </section>
    );
  };
  
  export default ItemDisplay;
  