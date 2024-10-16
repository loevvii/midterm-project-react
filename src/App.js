import React, { useState } from 'react';
import AddItem from './components/additem';
import ItemDisplay from './components/itemdisplay';
import UpdateItem from './components/updateitem';
import RemoveItem from './components/removeitem';
import CategoryDisplay from './components/categorydisplay';
import SearchItem from './components/searchitem';
import SortItems from './components/sortitem';
import DisplayLowStockItems from './components/displaylowstockitem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Router>
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-item" element={ <AddItem addItemToInventory={addItemToInventory} inventory={inventory} />}/>
          <Route path="/update-item" element={<UpdateItem inventory={inventory} updateItemInInventory={updateItemInInventory} />}/>
          <Route path="/remove-item" element={<RemoveItem inventory={inventory} removeItemFromInventory={removeItemFromInventory} />}/>
          <Route path="/display-category" element={<CategoryDisplay inventory={inventory} />}/>
          <Route path="/display-all" element={<ItemDisplay inventory={inventory} />}/>
          <Route path="/search-item" element={<SearchItem inventory={inventory}/>}/>
          <Route path="/sort-items" element={<SortItems inventory={inventory}/>}/>
          <Route path="/display-low-stock" element={<DisplayLowStockItems inventory={inventory}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
