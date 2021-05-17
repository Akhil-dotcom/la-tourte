import React, { useState } from "react";
import "../styles/Favourite.scss";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";


function Favourite() {
  const Info = [
    {
      image:
        "https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Red Velvet",
    },
    {
      image:
        "https://images.pexels.com/photos/2836443/pexels-photo-2836443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Chocolate Truffle",
    },
    {
      image:
        "https://images.pexels.com/photos/2684556/pexels-photo-2684556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Black Forest",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "Dark Muffin",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562022791-1ee0dc5f8b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=351&q=80",
      name: "White Forest",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566014321447-fd998cbb20a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      name: "Milk Chocolate",
    },
  ];
  const [current, setcurrent] = useState(0);

  const next = () => {
    setcurrent(current === Info.length / 2 ? Info.length / 2 : current + 1);
  };

  const prev = () => {
    setcurrent(current === 0 ? 0 : current - 1);
  };

  return (
    <div className="favourite">
      <div className="favourite__text">
        <div className="fav__sub">Favourite</div>
        <div className="fav__head">
          People do have favourite <span>Choices</span>.
        </div>
      </div>
      <div className="slider">
        <div className='left__btn' onClick={prev}>{current !== 0 ? <FaArrowCircleLeft size={23} /> : " "}</div>
        <div className="favourite__content">
          <div className="fav">
            <div className="fav__image">
              <img src={Info[current].image} />
            </div>
            <div className="fav__info">
              <div className="fav__name">{Info[current].name}</div>
            </div>
          </div>
          <div className="fav">
            <div className="fav__image">
              <img src={Info[current + 1].image} />
            </div>
            <div className="fav__info">
              <div className="fav__name">{Info[current+1].name}</div>
            </div>
          </div>
          <div className="fav">
            <div className="fav__image">
              <img src={Info[current + 2].image} />
            </div>
            <div className="fav__info">
              <div className="fav__name">{Info[current+2].name}</div>
            </div>
          </div>
        </div>
        <div className='right__btn' onClick={next}>{current !== Info.length / 2 ? <FaArrowCircleRight size={23} /> : " "}</div>
      </div>
    </div>
  );
}

export default Favourite;
