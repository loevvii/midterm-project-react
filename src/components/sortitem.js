import React, { useState } from 'react';

const SortItems = ({ inventory }) => {
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('');
  
  const sortedItems = () => {
    if (sortBy && order) {
      return [...inventory].sort((a, b) => {
        const aValue = sortBy === 'quantity' ? a.quantity : a.price;
        const bValue = sortBy === 'quantity' ? b.quantity : b.price;

        return order === 'ascending' ? aValue - bValue : bValue - aValue;
      });
    }
    return inventory;
  };

  return (
    <section className="jumbotron jumbotron-fluid text-center bg-img pt-3 d-flex justify-content-center align-items-center">
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
    <img className= "bgimage4"src='bg4.jpg' width="1920" height="1080"></img>
    <div className='formcontainer table-container'>
      <h3>Sort Items</h3>
      <label>
        Sort By:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Select</option>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
      </label>
      
      <label>
        Order:
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="">Select</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </label>
      
      <h4>Sorted Items:</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems().map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </section>
  );
};

export default SortItems;
