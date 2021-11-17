import React, { useState } from "react";
import Services from "../components/Services";

const OrderPage = () => {
  //Initialize variables:
  //know if the user has selected or not each service.
  let [checked1, setChecked1] = useState(false);
  let [checked2, setChecked2] = useState(false);
  let [checked3, setChecked3] = useState(false);
  let budget = 0;

  if (checked1 == true) {
    budget = budget + Services[0].price;
  } 
  if (checked2 == true) {
    budget = budget + Services[1].price;
  }
  if (checked3 == true) {
    budget = budget + Services[2].price;
  }

  //Change State of each service.
  const handleChange1 = () => {
    setChecked1(!checked1);
  };
  const handleChange2 = () => {
    setChecked2(!checked2);
  };
  const handleChange3 = () => {
    setChecked3(!checked3);
  };

  // Page :
  return (
    <div>
      <h3>¿Que quieres hacer?</h3>
      <section>
        <label>
          <input type="checkbox" checked={checked1} onChange={handleChange1} />
          {Services[0].name + " " + Services[0].price + Services[0].currency}
        </label>
        <br></br>
        <label>
          <input type="checkbox" checked={checked2} onChange={handleChange2} />
          {Services[1].name + " " + Services[1].price + Services[1].currency}
        </label>
        <br></br>
        <label>
          <input type="checkbox" checked={checked3} onChange={handleChange3} />
          {Services[2].name + " " + Services[2].price + Services[2].currency}
        </label>
      </section>
      <p>Preu: {budget} € </p>
    </div>
  );
};

export default OrderPage;
