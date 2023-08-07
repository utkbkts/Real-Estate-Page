import React from 'react'
import { NavLink } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
        <h2>Sayfa Bulunumadı</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, eum dolorum in nulla praesentium nihil non totam libero asperiores quo ipsa, labore sed animi omnis iure ullam esse, unde quos.</p>
        <p><NavLink to="/">Anasayfaya Git</NavLink></p>
    </div>
  )
}

export default NotFound