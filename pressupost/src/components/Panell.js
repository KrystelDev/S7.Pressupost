import React from "react";
import "./Panell.css";

const Panell = ({
  handleChangePage,
  handleChangeLangue,
  valuePage,
  valueLangue,
}) => {
  // Decrement and increment value input:
  const decrementValueInputPage = () => {
    if (valuePage > 1) {
      handleChangePage(valuePage - 1);
    } else {
      alert("No podemos entregar menos de una página");
    }
  };
  const incrementValueInputPage = () => {
    handleChangePage(valuePage + 1);
  };
  const decrementValueInputLangue = () => {
    if (valueLangue > 1) {
      handleChangeLangue(valueLangue - 1);
    } else {
      alert("No podemos realizar el servicio sin ningún idioma.");
    }
  };
  const incrementValueInputLangue = () => {
    handleChangeLangue(valueLangue + 1);
  };

  return (
    <form className="box">
      <div className="boxInputs">
        <p>
          Número de páginas:
          <button
            type="button"
            className="changeValue changeValueLess"
            onClick={decrementValueInputPage}
          >
            -
          </button>
          <input
            className="inputs"
            type="number"
            placeholder="1"
            min="1"
            value={valuePage}
            onChange={(event) => {
              console.log("input Page: " + event.target.value);
              handleChangePage(event.target.value);
            }}
          ></input>
          <button
            type="button"
            className="changeValue changeValueMore"
            onClick={incrementValueInputPage}
          >
            +
          </button>
        </p>
        <p>
          Número de idiomas:
          <button
            type="button"
            className="changeValue changeValueLess"
            onClick={decrementValueInputLangue}
          >
            -
          </button>
          <input
            className="inputs"
            type="number"
            placeholder="1"
            min="1"
            value={valueLangue}
            onChange={(event) => {
              console.log("input Langue: " + event.target.value);
              handleChangeLangue(event.target.value);
            }}
          ></input>
          <button
            type="button"
            className="changeValue changeValueMore"
            onClick={incrementValueInputLangue}
          >
            +
          </button>
        </p>
      </div>
    </form>
  );
};
export default Panell;
