import React from 'react'
import '../styles/Menu.scss'
import Mobile__Menu from '../mobile__components/Mobile__Menu'

function Menu() {
    return (
        <div className='menu'>
            <div className='menu__desktop'></div>
            <div className='menu__mobile'>
                <Mobile__Menu />
            </div>
        </div>
    )
}

export default Menu
