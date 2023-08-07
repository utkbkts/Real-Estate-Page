import React from 'react'
import { Outlet } from 'react-router-dom'
const KonutLayout = () => {
  return (
    <div className='konut-layout'>
        <h2>Konutlar</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, numquam error similique dolore quos architecto quaerat a molestias eaque obcaecati itaque adipisci qui quam voluptatibus eos incidunt. Excepturi, reprehenderit animi!</p>
        <Outlet/>
    </div>
  )
}

export default KonutLayout