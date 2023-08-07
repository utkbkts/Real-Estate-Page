import { NavLink,Outlet } from "react-router-dom";

import React from 'react'

const HelpLayout = () => {
  return (
    <div className="help-layout">
        <h2>UTKU Emlak Yardım</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe tempora doloribus iure ipsum harum veritatis. Est, nobis! Molestias ut esse qui iure laborum atque asperiores optio vero, repellendus praesentium.</p>
        <nav>
            <NavLink to="sss">Sık Sorulan Sorular</NavLink>
            <NavLink to="contact">Bağlantı kur</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default HelpLayout