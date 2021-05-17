import React from "react";
import Mobile__Home from "../mobile__components/Mobile__Home";
import "../styles/Home.scss";
import Choose from "./Choose";
import Favourite from "./Favourite";
import Founder from "./Founder";


function Home() {
  return (
    <div className="home">
      <div className="home__desktop">
        <div className='home__content'>
           <div className='home__left'>
               <div className='home__left__head'>So Sweet. So Good. Sure to bring <span>Smiles</span>.</div>
               <div className='home__left__menu'>
                  <div className='menu__button'>Discover More</div>
               </div>
               <div className='home__left__description'>
                   <div className='descp__head'>What we do</div>
                   <div className='space'></div>
                   <div className='descp__sub'>We bring out the taste of a lifetime. Our main aim is to provide the best at what we know the best. Making you happy is our priority</div>
               </div>
           </div>
           <div className='home__right'>
             <div className='main__image'>
                 <img src='https://images.pexels.com/photos/1749901/pexels-photo-1749901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
             </div>
             <div className='image1'>
                <div className='quote__num'>001</div>
                <div className='quote'>Remember, you don’t need to justify eating a whole cake to anyone.</div>
             </div>
             <div className='image2'>
                  <img src='https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
             </div>
           </div>
        </div>
        <Choose />
        <Favourite />
        <Founder />
      </div>
      <div className="home__mobile"><Mobile__Home /></div>
    </div>
  );
}

export default Home;
