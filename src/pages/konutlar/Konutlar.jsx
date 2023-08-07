import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const Konutlarloader=async()=>{
const res = await fetch("http://localhost:4000/konutlar")

return res.json()
}
const Konutlar = () => {
 
    const konutlar = useLoaderData();

  return (
    <div className="konutlar">
      {konutlar &&
        konutlar.map((konut) => (
          <Link to={konut.id.toString()} key={konut._id}>
            <p>{konut.baslik}</p>
            <p>konum:{konut.konum}</p>
          </Link>
        ))}
    </div>
  );
};

export default Konutlar;
