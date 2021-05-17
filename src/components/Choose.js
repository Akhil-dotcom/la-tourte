import React from "react";
import "../styles/Choose.scss";
import { FaRegThumbsUp, FaRegPaperPlane, FaRegHeart } from 'react-icons/fa';

function Choose() {
  return (
    <div className="choose">
      <div className='choose__sub'>Caring</div>
      <div className="choose__head">Why people <span>Choose us</span>?</div>
      <div className="choose__content">
        <div className="choose__info">
          <div className='choose__icon icon1'><FaRegThumbsUp size={40} color='#f9f9f9' /></div>
          <div className="choose__info__head">Best Quality</div>
          <div className='choose__info__sub'>Quality is our priority, building it up from scratch is what we aim for.</div>
        </div>
        <div className="choose__info center">
          <div className='choose__icon icon2'><FaRegPaperPlane size={40} color='#f9f9f9' /></div>
          <div className="choose__info__head">Imported Ingredients</div>
          <div className='choose__info__sub'>Quality is our priority, building it up from scratch is what we aim for.</div>
        </div>
        <div className="choose__info">
           <div className='choose__icon icon3'><FaRegHeart size={40} color='#f9f9f9' /></div>
           <div className='choose__info__head'>You'll just love it.</div>
           <div className='choose__info__sub'>Quality is our priority, building it up from scratch is what we aim for.</div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
