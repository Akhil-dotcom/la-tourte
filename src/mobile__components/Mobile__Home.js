import React from "react";
import "../styles/Mobile__Home.scss";
import Mobile__Favourites from "./Mobile__Favourites";
import Mobile__Navbar from "./Mobile__Navbar";
import Bottom__Navbar from './Bottom__Navbar'

function Mobile__Home() {
  return (
    <div className="mobile__home">
      <Mobile__Navbar />
      <div className='mobile__home__content'>
         <div className='mobile__home__head'>Come Experience The Taste Of Joy.</div>
         <div className='mobile__home__info'>
            
         </div>
      </div>
    </div>
  );
}

export default Mobile__Home;
