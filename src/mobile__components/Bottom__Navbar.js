import React, { useState } from 'react'
import '../styles/Bottom__Navbar.scss'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi';
import { CgMenuCake } from 'react-icons/cg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';

function Bottom__Navbar() {
    const [home, sethome] = useState(true)
    const [menu, setmenu] = useState(false)
    const [locate, setlocate] = useState(false)
    const [call, setcall] = useState(false)

    const homeClicked = () => {
        sethome(true)
        setmenu(false)
        setlocate(false)
        setcall(false)
    }

    const menuClicked = () => {
        setmenu(true)
        sethome(false)
        setlocate(false)
        setcall(false)
    }

    const locateClicked = () => {
        setmenu(false)
        sethome(false)
        setlocate(true)
        setcall(false)
    }

    const callClicked = () => {
        setmenu(false)
        sethome(false)
        setlocate(false)
        setcall(true)
    }
    
    return (
        <div className='bottom__navbar'>
           <div className='bottom__navbar__items'>
               <Link to='/' onClick={homeClicked} className={home === false ? 'bottom__navbar__link' : 'bottom__navbar__clicked'}><BiHomeAlt size={26} /></Link>
               <Link to='/menu' onClick={menuClicked} className={menu === false ? 'bottom__navbar__link' : 'bottom__navbar__clicked'} ><CgMenuCake size={26} /></Link>
               <Link to='/' onClick={locateClicked} className={locate === false ? 'bottom__navbar__link' : 'bottom__navbar__clicked'} ><HiOutlineLocationMarker size={26} /></Link>
               <a href='tel:+919710635120' onClick={callClicked} className={call === false ? 'bottom__navbar__link' : 'bottom__navbar__clicked'}><FiPhoneCall size={26} /></a>
           </div>
        </div>
    )
}

export default Bottom__Navbar
