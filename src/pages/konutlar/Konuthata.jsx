import React from 'react'
import { Link,useRouteError } from 'react-router-dom'

const Konuthata = () => {
    const error = useRouteError();

  return (
    <div className='konut-hata'>
        <h2>Hata!!!</h2>
        <p>{error.message}</p>
        <Link to="/" style={{textDecoration:"underline"}}>Anasayfaya Git</Link>
    </div>
  )
}

export default Konuthata