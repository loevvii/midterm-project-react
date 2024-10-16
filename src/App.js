import React, { useState } from 'react';
import AddItem from './components/additem';
import ItemDisplay from './components/itemdisplay';
import UpdateItem from './components/updateitem';
import RemoveItem from './components/removeitem';
import CategoryDisplay from './components/categorydisplay';
import './App.css';

function App() {
  const [inventory, setInventory] = useState([]);

  // Function to add a new item to the inventory
  const addItemToInventory = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  // Function to update an item in the inventory by ID
  const updateItemInInventory = (updatedItem) => {
    setInventory(
      inventory.map((item) => 
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  // Function to remove an item from the inventory by ID
  const removeItemFromInventory = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };


  return (
    <div>
      {/* Pass inventory and add, update, remove functions to components */}
      <AddItem addItemToInventory={addItemToInventory} inventory={inventory} />
      <ItemDisplay inventory={inventory} />
      <UpdateItem inventory={inventory} updateItemInInventory={updateItemInInventory} />
      <RemoveItem inventory={inventory} removeItemFromInventory={removeItemFromInventory} />
      <CategoryDisplay inventory={inventory} />
    </div>
  );
}

export default App;
