import React from "react";
import "../styles/Mobile__Navbar.scss";
import { GrSearch } from "react-icons/gr";

function Mobile__Navbar() {

  return (
    <div className="mobile__navbar">
      <div className="mobile__navbar__content">
        <div className="mobile__navbar__logo">La Tourte</div>
        <div className="mobile__menu__icon">
          <GrSearch size={23} className='fa__icon' />
        </div>
      </div>
    </div>
  );
}

export default Mobile__Navbar;
