import React, { useState } from 'react'

import { useSearchParams } from "react-router-dom"

// import { Navigate } from 'react-router-dom'
const About = () => {
  // const [user,setUser]=useState("utku")
  // if(!user){
  //   return <Navigate to="/" replace={true}/>
  // }
  const [searchParams]=useSearchParams();
  const name = searchParams.get("name")
  return (
    <div className='about'>
        <h1>Hakkımızda</h1>
        {name && <p>Merhaba {name}</p>}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo sint quia atque est laudantium quae earum ut! Illo, laboriosam nisi ut quia nobis fuga neque quod soluta ad tempora?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo sint quia atque est laudantium quae earum ut! Illo, laboriosam nisi ut quia nobis fuga neque quod soluta ad tempora?</p>
        {/* <button onClick={()=>setUser(null)}>Çıkış</button> */}
    </div>
  )
}

export default About