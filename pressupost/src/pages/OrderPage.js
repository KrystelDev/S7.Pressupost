import React, { useState, useEffect } from "react";
import Services from "../components/Services";
import Panell from "../components/Panell";

//Info of checkbox React : https://www.robinwieruch.de/react-checkbox
const OrderPage = () => {
  //Initialize variables:
  //know if the user has selected or not each service.
  let [checked1, setChecked1] = useState(false);
  let [checked2, setChecked2] = useState(false);
  let [checked3, setChecked3] = useState(false);
  const [sercivesSelected, setSercivesSelected] = useState(0); //Price service selected
  let [valuePage, setValuePage] = useState(1); //Quantity page (min:1)
  let [valueLangue, setValueLangue] = useState(1); //Quantity Langue (min:1)
  const [supplement, setSupplemen] = useState(0); //Price supplemen
  let [budget, setBudget] = useState(0);

  useEffect(() => {
    // Update the budget with its supplement
    setBudget(sercivesSelected + supplement);
  }, [sercivesSelected, supplement]);

  /*Change State of each service and add checked budget:
   * Service Pàgina Web :
   */
  const handleChange1 = () => {
    const isSelected1 = checked1 === true;
    const notSelected1 = checked1 === false;
    if (isSelected1) {
      // Here we deselect webSelected and supplemen
      setSupplemen(0);
      setValueLangue(0);
      setValuePage(0);
      setSercivesSelected(sercivesSelected - Services[0].price);
      setChecked1(!checked1); //because is "asincrono"
    }
    if (notSelected1) {
      setSercivesSelected(sercivesSelected + Services[0].price);
      // Here we deselect webSelected
      setChecked1(!checked1); //because is "asincrono"
    }
    console.log("check" + checked1);
  };
  //Personalized service Pàgina Web:
  const handleChangePage = (item) => {
    setValuePage(item, console.log("Page: " + item));
    setSupplemen(item * valueLangue * 30);
  };
  const handleChangeLangue = (item) => {
    setValueLangue(item, console.log("Langue: " + item));
    setSupplemen(item * valuePage * 30);
  };

  //  * Service Consultoria SEO :
  const handleChange2 = () => {
    const isSelected2 = checked2 === true;
    const notSelected2 = checked2 === false;
    if (isSelected2) {
      // Aquí deseleccionem el webSelected
      setSercivesSelected(sercivesSelected - Services[1].price);
      setChecked2(!checked2); //because is "asincrono"
    }
    if (notSelected2) {
      setSercivesSelected(sercivesSelected + Services[1].price);
      // Aquí seleccionem el webSelected
      setChecked2(!checked2); //because is "asincrono"
    }
    console.log("check" + checked2);
  };

  //  * Campaña Googel Ads:
  const handleChange3 = () => {
    const isSelected3 = checked3 === true;
    const notSelected3 = checked3 === false;
    if (isSelected3) {
      // Aquí deseleccionem el webSelected
      setSercivesSelected(sercivesSelected - Services[2].price);
      setChecked3(!checked3); //because is "asincrono"
    }
    if (notSelected3) {
      setSercivesSelected(sercivesSelected + Services[2].price);
      // Aquí seleccionem el webSelected
      setChecked3(!checked3); //because is "asincrono"
    }
    console.log("check" + checked3);
  };

  return (
    <div>
      <h3>¿Que quieres hacer?</h3>
      <section>
        <label>
          {checked1 ? (
            <div>
              <input
                type="checkbox"
                checked={checked1}
                onChange={handleChange1}
              />
              {Services[0].name +
                " (" +
                Services[0].price +
                ")" +
                Services[0].currency}
              <Panell
                handleChangePage={handleChangePage}
                handleChangeLangue={handleChangeLangue}
                valuePage={valuePage}
                valueLangue={valueLangue}
              />
            </div>
          ) : (
            <div>
              <input
                type="checkbox"
                checked={checked1}
                onChange={handleChange1}
              />
              {Services[0].name +
                " (" +
                Services[0].price +
                ")" +
                Services[0].currency}
            </div>
          )}
        </label>

        <label>
          <div>
            <input
              type="checkbox"
              checked={checked2}
              onChange={handleChange2}
            />
            {Services[1].name +
              " (" +
              Services[1].price +
              ")" +
              Services[1].currency}
          </div>
        </label>

        <label>
          <div>
            <input
              type="checkbox"
              checked={checked3}
              onChange={handleChange3}
            />
            {Services[2].name +
              " (" +
              Services[2].price +
              ")" +
              Services[2].currency}
          </div>
        </label>
      </section>
      <p>Preu: {budget} € </p>
    </div>
  );
};

export default OrderPage;
