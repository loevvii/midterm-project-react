import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary position-absolute w-100">
      <div className="container-fluid d-flex align-items-center"> 
        <Link className="navbar-brand" to="/"><img src= 'rhodeslogo.png'style={{ height: '100px' }}></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link custom-navlink" to="/add-item">Add Item</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-navlink" to="/update-item">Update Item</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-navlink" to="/remove-item">Remove Item</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-navlink" to="/display-category">Display Items by Category</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-navlink" to="/display-all">Display All Items</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-navlink" to="/search-item">Search Item</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-navlink" to="/sort-items">Sort Items</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-navlink" to="/display-low-stock">Display Low Stock</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

export default Navbar