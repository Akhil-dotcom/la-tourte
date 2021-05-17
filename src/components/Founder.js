import React from "react";
import "../styles/Founder.scss";
import { BsStarFill } from "react-icons/bs";

function Founder() {
  return (
    <div className="founder">
      <div className="founder__content">
        <div className="founder__top">
          <div className="founder__head">
            Finally Made It <span>Happen</span>
          </div>
        </div>
        <div className="founder__bottom">
          <div className="founder__left">
            <img
              src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
              alt=""
            />
          </div>
          <div className="founder__right">
            <div className="founder__info">
              <div className="founder__text">
                <div className="text__sub">Inspiration</div>
                <div className="text__descp">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
                <div className='stars'>
                  <BsStarFill className='star' size={23} />
                  <BsStarFill className='star' size={23} />
                  <BsStarFill className='star' size={23} />
                  <BsStarFill className='star' size={23} />
                  <BsStarFill className='star' size={23} />
                </div>
                <div className='chef'>
                   <div className='tag'>Chef</div>
                   <div className='chef__name'>Binu Poulose</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
