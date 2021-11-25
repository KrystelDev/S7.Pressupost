import React from "react";
import "./Panell.css";

const Panell = ({ handleChangePage, handleChangeLangue }) => {
  return (
    <form className="box">
      <div className="boxInputs">
        <p>
          Nº pàgines:
          <input
            type="number"
            placeholder="0"
            onChange={(event) => {
              const valueInputPage = event.target.value;
              console.log("input Page: " + valueInputPage);
              handleChangePage(valueInputPage);
            }}
          ></input>
        </p>
        <p>
          Nº idiomes:
          <input
            type="number"
            placeholder="0"
            onChange={(event) => {
              const valueInputLangue = event.target.value;
              console.log("input Langue: " + valueInputLangue);
              handleChangeLangue(valueInputLangue);
            }}
          ></input>
        </p>
      </div>
    </form>
  );
};
export default Panell;
