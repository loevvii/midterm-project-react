import React from 'react'

const Home = () => {

  return (
    <section className="jumbotron jumbotron-fluid text-center bg-img pt-3 d-flex justify-content-center align-items-center">
      <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
          <img className= "bgimage"src='bg2.png'></img>
          <div className='rhodesisland'>
            <img src='rhodeslogo.png'></img>
          </div>
          <div className='hometext'>
          <h4 className="lead fs-2 pb-3">Welcome to</h4>
          <h1 className="jumbotron-heading display-4 pb-3">RHODES ISLAND</h1>
          <h2 className="lead fs-2 pb-3"><b>I</b>nventory <b>M</b>anagement <b>S</b>ystem</h2>
          </div>
      </div>
    </section>
  );

}

export default Home