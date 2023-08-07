import React, { useState } from "react";
import {Form, redirect, useActionData } from "react-router-dom";

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const veri = {
    email: data.get("email"),
    mesaj: data.get("message"),
  };
  // test@gmail.com
  if (veri.mesaj.length < 10) {
  return   { error: "Mesajınız en az 10 karakter olmalıdır." };
  }
  return redirect("/");
};
const Contact = () => {
  const maxtotal = 60;
  const [veri, setVeri] = useState({ email: "", message: "" });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setVeri((prevData) => ({ ...prevData, [name]: value }));

  };
  const data=useActionData();
  return (
    <div className="contact">
      <h3>Bağlantı kur</h3>
      <Form action="/help/contact" method="POST">
        <label htmlFor="email">
          <span>Email Adresiniz</span>
          <input
            type="email"
            required
            name="email"
            value={veri.email}
            onChange={handlechange}
          />
        </label>
        <label htmlFor="message" className="flex flex-col w-72">
          <span>Mesajınız</span>
          <textarea
            name="message"
            maxLength={maxtotal}
            cols="30"
            rows="10"
            required
            value={veri.mesaj}
            onChange={handlechange}
          ></textarea>
          <div className="w-full flex justify-end">
          {`${veri.message.length}/${maxtotal}`}
          </div>
        </label>
        <button >Gönder</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export default Contact;
