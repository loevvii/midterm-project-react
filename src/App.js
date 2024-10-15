import React, { useState } from 'react';
import AddItem from './components/additem';
import ItemDisplay from './components/itemdisplay';
import './App.css';

function App() {
  // Move the inventory state to App.js so it's accessible by both components
  const [inventory, setInventory] = useState([]);

  // Function to update inventory in the form
  const addItemToInventory = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  return (
    <div>
      {/* Pass the addItemToInventory function to the form so it can add items */}
      <AddItem addItemToInventory={addItemToInventory} />
      
      {/* Render the ItemDisplay separately */}
      <ItemDisplay inventory={inventory} />
    </div>
  );
}

export default App;
