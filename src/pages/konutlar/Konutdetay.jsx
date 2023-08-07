import React from "react";
import { useLoaderData } from "react-router-dom";

export const konutdetayLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/konutlar/" + id);

  if(!res.ok){
    throw Error("Veri Alınamadı.")
  }

  return res.json();
};

const Konutdetay = () => {
  const konut = useLoaderData();
  return (
    <div className="konut-detay">
      <h2>{konut.baslik}</h2>
      <p>Fiyat:{konut.fiyat}</p>
      <p>Konum:{konut.konum}</p>
      <p>Durum:{konut.durum}</p>
    </div>
  );
};

export default Konutdetay;
